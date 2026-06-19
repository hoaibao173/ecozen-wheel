let spinCount = 0;

/* CHỈ ĐỊNH PHẦN THƯỞNG */
const FIXED_RESULTS = {
 15: "Chảo chống dính",
  25: "Chảo chống dính",
    35: "Chảo chống dính",
      45: "Chảo chống dính",
    50: "Chảo chống dính",
      60: "Chảo chống dính",
    70: "Chảo chống dính",
      80: "Chảo chống dính",
  
  21: "Sổ tay + bút ký",
  31: "Sổ tay + bút ký",
  41: "Sổ tay + bút ký",
51: "Sổ tay + bút ký",
  61: "Sổ tay + bút ký",
71: "Sổ tay + bút ký",
  81: "Sổ tay + bút ký",
  90: "Sổ tay + bút ký",
  21: "Sổ tay + bút ký",
  30: "Sổ tay + bút ký",
  21: "Sổ tay + bút ký",
};
/* DANH SÁCH QUÀ */
let names = [
  "Sổ tay",
  "Bút kí",
  "Chảo chống dính",
  "Sổ tay + bút ký",
  "Nón bảo hiểm"
];
/* MÃ QUAY */
let ACCESS_CODE =
JSON.parse(
  localStorage.getItem("ACCESS_CODE")
);

if(!ACCESS_CODE){

  ACCESS_CODE = [
    "e01","e02","e03","e04",
    "e05","e06","e07","e08","e09","e10","e11",
    "e12","e13","e14","e15","e16","e17","e18",
    "e19","e20","e21","e22"
  ];

  localStorage.setItem(
    "ACCESS_CODE",
    JSON.stringify(ACCESS_CODE)
  );
}
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");



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

localStorage.setItem(
  "ACCESS_CODE",
  JSON.stringify(ACCESS_CODE)
);
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