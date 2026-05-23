let spinCount = 0;

/* CHỈ ĐỊNH PHẦN THƯỞNG */
const FIXED_RESULTS = {

  3: "Nón bảo hiểm",

  5: "Đồng hồ đeo tay trẻ em",

  7: "Bình nước mùa hè"

};

/* MÃ QUAY */
const ACCESS_CODE = [
  "E01",
  "E02",
  "E03",
  "E04",
  "E05",
  "E06",
  "E07",
  "E08"
];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");

/* DANH SÁCH QUÀ */
let names = [

  "Đồng hồ đeo tay trẻ em",

  "Bình nước mùa hè",

  "Đèn pin tiện dụng",

  "Nón bảo hiểm",

  "Sổ tay + bút ký",

  "Balo dây rút"

];

let startAngle = 0;

let spinning = false;

const colors = [

  "#ff5252",

  "#f4d03f",

  "#4caf50",

  "#3f51b5",

  "#ff9800",

  "#9c27b0"

];

drawWheel();

/* ===== DRAW ===== */
function drawWheel(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  const radius = 320;

  const slice = (2 * Math.PI) / names.length;

  names.forEach((name,i)=>{

    const angle = startAngle + i * slice;

    /* Ô màu */
    ctx.beginPath();

    ctx.moveTo(cx,cy);

    ctx.arc(
      cx,
      cy,
      radius,
      angle,
      angle + slice
    );

    ctx.fillStyle = colors[i % colors.length];

    ctx.fill();

    ctx.strokeStyle = "#fff";

    ctx.lineWidth = 2;

    ctx.stroke();

    /* TEXT */
    ctx.save();

    ctx.translate(cx,cy);

    ctx.rotate(angle + slice/2);

    ctx.textAlign = "right";

    ctx.fillStyle = "#222";

    ctx.font = "bold 22px Arial";

    ctx.fillText(name,280,10);

    ctx.restore();
  });

  /* ĐÈN */
  for(let i=0;i<36;i++){

    const a = (i/36) * Math.PI * 2;

    const x = cx + Math.cos(a) * 330;

    const y = cy + Math.sin(a) * 330;

    ctx.beginPath();

    ctx.arc(x,y,4,0,Math.PI*2);

    ctx.fillStyle =
      i % 2 === 0
      ? "#fff176"
      : "#ffffff";

    ctx.fill();
  }
}

/* ===== SPIN ===== */
function spin(){

  if(spinning) return;

  const inputCode =
    document.getElementById("spinCode")
    .value
    .trim();

  /* CHECK CODE */
  if(!ACCESS_CODE.includes(inputCode)){

    alert("❌ Sai mã quay!");

    return;
  }

  /* TĂNG LƯỢT */
  spinCount++;

  spinning = true;

  const minSpins = 10;

  let targetAngle;

  /* QUÀ CHỈ ĐỊNH */
  const fixedPrize =
    FIXED_RESULTS[spinCount];

  /* ÉP KẾT QUẢ */
  if(
    fixedPrize &&
    names.includes(fixedPrize)
  ){

    const slice =
      (2 * Math.PI) / names.length;

    const index =
      names.indexOf(fixedPrize);

  targetAngle =
  (2 * Math.PI)
  - (index * slice)
  - (slice / 2);

  }else{

    targetAngle =
      Math.random() * 2 * Math.PI;
  }

  const totalSpin =
    minSpins * 2 * Math.PI
    + targetAngle;

  const duration = 5000;

  const start = performance.now();

  function easeOut(t){

    return 1 - Math.pow(1 - t,4);
  }

  function animate(now){

    const elapsed = now - start;

    const progress =
      Math.min(elapsed / duration,1);

    const eased =
      easeOut(progress);

    startAngle =
      (totalSpin * eased)
      % (Math.PI * 2);

    drawWheel();

    if(progress < 1){

      requestAnimationFrame(animate);

    }else{

      spinning = false;

      /* XÓA CODE */
      const codeIndex =
        ACCESS_CODE.indexOf(inputCode);

      if(codeIndex > -1){

        ACCESS_CODE.splice(codeIndex,1);
      }

      /* CLEAR INPUT */
      document.getElementById("spinCode").value = "";

      pickWinner();
    }
  }

  requestAnimationFrame(animate);
}

/* ===== WINNER ===== */
function pickWinner(){

  const slice =
    (2 * Math.PI) / names.length;

  /* Mũi tên nằm bên phải */
  const pointerAngle = 0;

  let adjustedAngle =
    (2 * Math.PI - startAngle + pointerAngle)
    % (2 * Math.PI);

  let index =
    Math.floor(adjustedAngle / slice);

  index =
    index % names.length;

  alert(
    "🎉 Xin chúc mừng, phần quà là : "
    + names[index]
  );
}
spinBtn.addEventListener("click",spin);