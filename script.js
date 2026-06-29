let spinCount = 0;

/* CHỈ ĐỊNH PHẦN THƯỞNG */
const FIXED_RESULTS = {
  // ===== CHẢO CHỐNG DÍNH (25) =====
  8: "Chảo chống dính",
  16: "Chảo chống dính",
  24: "Chảo chống dính",
  32: "Chảo chống dính",
  40: "Chảo chống dính",
  48: "Chảo chống dính",
  56: "Chảo chống dính",
  64: "Chảo chống dính",
  72: "Chảo chống dính",
  80: "Chảo chống dính",
  88: "Chảo chống dính",
  96: "Chảo chống dính",
  104: "Chảo chống dính",
  112: "Chảo chống dính",
  120: "Chảo chống dính",
  128: "Chảo chống dính",
  136: "Chảo chống dính",
  144: "Chảo chống dính",
  152: "Chảo chống dính",
  160: "Chảo chống dính",
  168: "Chảo chống dính",
  176: "Chảo chống dính",
  184: "Chảo chống dính",
  192: "Chảo chống dính",
  200: "Chảo chống dính",

  // ===== BÚT KÝ (10) =====
  14: "Bút kí",
  34: "Bút kí",
  54: "Bút kí",
  74: "Bút kí",
  94: "Bút kí",
  114: "Bút kí",
  134: "Bút kí",
  154: "Bút kí",
  174: "Bút kí",
  194: "Bút kí",

  // ===== SỔ TAY + BÚT KÝ (10) =====
  10: "Sổ tay + bút ký",
  30: "Sổ tay + bút ký",
  50: "Sổ tay + bút ký",
  70: "Sổ tay + bút ký",
  90: "Sổ tay + bút ký",
  110: "Sổ tay + bút ký",
  130: "Sổ tay + bút ký",
  150: "Sổ tay + bút ký",
  170: "Sổ tay + bút ký",
  190: "Sổ tay + bút ký",

  // ===== NÓN BẢO HIỂM (61) =====
  3:"Nón bảo hiểm",
  6:"Nón bảo hiểm",
  9:"Nón bảo hiểm",
  12:"Nón bảo hiểm",
  18:"Nón bảo hiểm",
  21:"Nón bảo hiểm",
  27:"Nón bảo hiểm",
  36:"Nón bảo hiểm",
  39:"Nón bảo hiểm",
  42:"Nón bảo hiểm",
  45:"Nón bảo hiểm",
  51:"Nón bảo hiểm",
  57:"Nón bảo hiểm",
  60:"Nón bảo hiểm",
  66:"Nón bảo hiểm",
  69:"Nón bảo hiểm",
  75:"Nón bảo hiểm",
  78:"Nón bảo hiểm",
  81:"Nón bảo hiểm",
  84:"Nón bảo hiểm",
  87:"Nón bảo hiểm",
  93:"Nón bảo hiểm",
  99:"Nón bảo hiểm",
  102:"Nón bảo hiểm",
  108:"Nón bảo hiểm",
  111:"Nón bảo hiểm",
  117:"Nón bảo hiểm",
  123:"Nón bảo hiểm",
  126:"Nón bảo hiểm",
  132:"Nón bảo hiểm",
  138:"Nón bảo hiểm",
  141:"Nón bảo hiểm",
  147:"Nón bảo hiểm",
  153:"Nón bảo hiểm",
  156:"Nón bảo hiểm",
  162:"Nón bảo hiểm",
  165:"Nón bảo hiểm",
  171:"Nón bảo hiểm",
  177:"Nón bảo hiểm",
  180:"Nón bảo hiểm",
  183:"Nón bảo hiểm",
  186:"Nón bảo hiểm",
  189:"Nón bảo hiểm",
  195:"Nón bảo hiểm",
  198:"Nón bảo hiểm",
  199:"Nón bảo hiểm",
  196:"Nón bảo hiểm",
  191:"Nón bảo hiểm",
  179:"Nón bảo hiểm",
  173:"Nón bảo hiểm",
  163:"Nón bảo hiểm",
  149:"Nón bảo hiểm",
  145:"Nón bảo hiểm",
  137:"Nón bảo hiểm",
  129:"Nón bảo hiểm",
  121:"Nón bảo hiểm",
  115:"Nón bảo hiểm",
  107:"Nón bảo hiểm",
  101:"Nón bảo hiểm",
  95:"Nón bảo hiểm",
  89:"Nón bảo hiểm"
};
/* DANH SÁCH QUÀ */
let names = [
  "Sổ tay",
  "Bút kí",
  "Chảo chống dính",
  "Sổ tay + bút ký",
  "Nón bảo hiểm"
];
/* MÃ ÉP PHẦN THƯỞNG */
const FIXED_CODE_RESULTS = {
    "Ecozen18year02OCFX4N": "Chảo chống dính",
     "Ecozen18year045GVG5J": "Sổ tay",
    "Ecozen18year0HQHIP4O": "Nón bảo hiểm",
    "Ecozen18year0IGYQJ35": "Sổ tay",
    "Ecozen18year0PQI2OX7": "Nón bảo hiểm",
    "Ecozen18year0PVVGU6Q": "Sổ tay",
    "Ecozen18year0QUZG3AY": "Nón bảo hiểm",
    "Ecozen18year114B4YWL": "Sổ tay",
    "test": "Sổ tay + bút ký"
};
/* MÃ QUAY */
let ACCESS_CODE =
JSON.parse(
  localStorage.getItem("ACCESS_CODE")
);

if(!ACCESS_CODE){

  ACCESS_CODE = ["Ecozen18year02OCFX4N",
  "Ecozen18year045GVG5J",
  "Ecozen18year0HQHIP4O",
  "Ecozen18year0IGYQJ35",
  "Ecozen18year0PQI2OX7",
  "Ecozen18year0PVVGU6Q",
  "Ecozen18year0QUZG3AY",
  "Ecozen18year114B4YWL",
  "Ecozen18year13OUN5RV",
  "Ecozen18year17FUJOCZ",
  "Ecozen18year18R3ML8K",
  "Ecozen18year194IAOBY",
  "Ecozen18year1CQ0FR6B",
  "Ecozen18year1O5RMYV3",
  "Ecozen18year1TADK5SX",
  "Ecozen18year25AFSIQM",
  "Ecozen18year2FX1VQXC",
  "Ecozen18year2G0DFE8N",
  "Ecozen18year2TM566OO",
  "Ecozen18year343WYMNY",
  "Ecozen18year36ZHDRJS",
  "Ecozen18year3OEGGYJI",
  "Ecozen18year3VH4GPII",
  "Ecozen18year3X7KZ5SV",
  "Ecozen18year4EOWZMI1",
  "Ecozen18year4M7XNLDU",
  "Ecozen18year4O0UF099",
  "Ecozen18year4Y0PBLHO",
  "Ecozen18year56EERM2M",
  "Ecozen18year5FGI8QG0",
  "Ecozen18year5FWPZ0GB",
  "Ecozen18year682SGY0Y",
  "Ecozen18year6P2PSAP6",
  "Ecozen18year6V8RK7W8",
  "Ecozen18year6WRVWIEN",
  "Ecozen18year721O3SE0",
  "Ecozen18year78S2CT7P",
  "Ecozen18year7D7GR9BC",
  "Ecozen18year7KP91XY0",
  "Ecozen18year7M57K4FX",
  "Ecozen18year7O3QNRWV",
  "Ecozen18year7UXBJ78J",
  "Ecozen18year7YHBQI6I",
  "Ecozen18year80DA7ESD",
  "Ecozen18year87Z8IEX5",
  "Ecozen18year88WSU0FI",
  "Ecozen18year8CBVW7F4",
  "Ecozen18year8UJW2NX0",
  "Ecozen18year8UNZ3DBK",
  "Ecozen18year8XK4A48G",
  "Ecozen18year918MNRXR",
  "Ecozen18year97WA4JQA",
  "Ecozen18year9EU9OOF0",
  "Ecozen18year9KMJLDWI",
  "Ecozen18year9QFRHASC",
  "Ecozen18year9Y4YGPCU",
  "Ecozen18yearA0OJLA1V",
  "Ecozen18yearAFBENDXA",
  "Ecozen18yearAL6R8U1I",
  "Ecozen18yearAM8XH1WU",
  "Ecozen18yearAPUPC60T",
  "Ecozen18yearARZIWS8I",
  "Ecozen18yearAXH7KW2T",
  "Ecozen18yearBLA7FG1K",
  "Ecozen18yearBM3SCTHI",
  "Ecozen18yearBSC1TPOO",
  "Ecozen18yearBZH1JSSM",
  "Ecozen18yearC47515VC",
  "Ecozen18yearC7C92ICU",
  "Ecozen18yearCGEKEJ5R",
  "Ecozen18yearCHLAO1VA",
  "Ecozen18yearCN8OMXUF",
  "Ecozen18yearCO0EIJJF",
  "Ecozen18yearCS839TOF",
  "Ecozen18yearDDG9UJH3",
  "Ecozen18yearDPE2ORC1",
  "Ecozen18yearE2YDWEBM",
  "Ecozen18yearE50UQ78N",
  "Ecozen18yearEK9PX1AP",
  "Ecozen18yearEPUCT22Z",
  "Ecozen18yearF3EQ49LZ",
  "Ecozen18yearF5QSTVY8",
  "Ecozen18yearF96K4JFV",
  "Ecozen18yearFD6V8BBF",
  "Ecozen18yearFE46LK10",
  "Ecozen18yearFGEKEFMS",
  "Ecozen18yearFJJO2LQT",
  "Ecozen18yearFW9DJFMS",
  "Ecozen18yearFY09UH4M",
  "Ecozen18yearG2S9VJVV",
  "Ecozen18yearGFE3Q8JL",
  "Ecozen18yearGFQK65UO",
  "Ecozen18yearGMD8U5FX",
  "Ecozen18yearGZ9HXDTX",
  "Ecozen18yearH0JLT408",
  "Ecozen18yearH5YNGF15",
  "Ecozen18yearH6JH27OH",
  "Ecozen18yearHDJB6RFY",
  "Ecozen18yearHE36J4P1",
  "Ecozen18yearHQ344UND",
  "Ecozen18yearHR1456VW",
  "Ecozen18yearHSSQBMW0",
  "Ecozen18yearIQT884R8",
  "Ecozen18yearIU1LIEA6",
  "Ecozen18yearJ2KM4O1Y",
  "Ecozen18yearJ490YT7H",
  "Ecozen18yearJ68AD7RI",
  "Ecozen18yearJCU8H9TE",
  "Ecozen18yearJE5Y8LWR",
  "Ecozen18yearJEY2HTG8",
  "Ecozen18yearJQALK60S",
  "Ecozen18yearK3XIP9X7",
  "Ecozen18yearK6LS43WJ",
  "Ecozen18yearK9SUJOMG",
  "Ecozen18yearKMI75Q1B",
  "Ecozen18yearKOPW5WK3",
  "Ecozen18yearKUZJ0QBL",
  "Ecozen18yearL1VFAJJA",
  "Ecozen18yearL92B0YMN",
  "Ecozen18yearL9WDBHYZ",
  "Ecozen18yearLA0W368Z",
  "Ecozen18yearLDJMJU9F",
  "Ecozen18yearLIAP14AZ",
  "Ecozen18yearLR2QDYQJ",
  "Ecozen18yearLVYFJBPZ",
  "Ecozen18yearLZKZHBNY",
  "Ecozen18yearM7X0MWN2",
  "Ecozen18yearMARZ3XYR",
  "Ecozen18yearMJZD0TM4",
  "Ecozen18yearN44M8PKQ",
  "Ecozen18yearN9LA4E9V",
  "Ecozen18yearNATVAJVD",
  "Ecozen18yearNCQ36HZK",
  "Ecozen18yearNEJD0RP7",
  "Ecozen18yearNGWYH3ZP",
  "Ecozen18yearNJ3DJYDQ",
  "Ecozen18yearNUSTNXN1",
  "Ecozen18yearNWNVIGYS",
  "Ecozen18yearOCOHSH6X",
  "Ecozen18yearOPBJSY4K",
  "Ecozen18yearOPO9G2OD",
  "Ecozen18yearORITRC0P",
  "Ecozen18yearOZG5F0LZ",
  "Ecozen18yearP181G20X",
  "Ecozen18yearPHQSK8IL",
  "Ecozen18yearPIZYKMKY",
  "Ecozen18yearPV5O5VB9",
  "Ecozen18yearR4HFZY6Z",
  "Ecozen18yearR4W2YE89",
  "Ecozen18yearRE8VP9MI",
  "Ecozen18yearRHO3GPVJ",
  "Ecozen18yearRJD469P7",
  "Ecozen18yearRR73OPYP",
  "Ecozen18yearRRXYC5BN",
  "Ecozen18yearRS4T40PY",
  "Ecozen18yearRXJFP094",
  "Ecozen18yearS7OXA5VW",
  "Ecozen18yearSJR2TKL5",
  "Ecozen18yearSM72QY1C",
  "Ecozen18yearSX49MYYQ",
  "Ecozen18yearT78Z9UUL",
  "Ecozen18yearTINN8GU4",
  "Ecozen18yearTLBP5UJY",
  "Ecozen18yearTTTDP22P",
  "Ecozen18yearTVY6HSXL",
  "Ecozen18yearTZCFN9EW",
  "Ecozen18yearU8ET5RZU",
  "Ecozen18yearURSX8JL6",
  "Ecozen18yearV4QTAOBE",
  "Ecozen18yearV6DGC3DD",
  "Ecozen18yearVD7ER9DJ",
  "Ecozen18yearVZU8ZAHW",
  "Ecozen18yearW2VQZ653",
  "Ecozen18yearW75QEBKT",
  "Ecozen18yearWMGJG8GM",
  "Ecozen18yearWMQ741T0",
  "Ecozen18yearWU6KWNOH",
  "Ecozen18yearX4VEUZWM",
  "Ecozen18yearX85VTWQB",
  "Ecozen18yearXCL7M5A7",
  "Ecozen18yearXHDWXCQN",
  "Ecozen18yearXJK5DUGF",
  "Ecozen18yearXLOFVCR1",
  "Ecozen18yearXPO9RCD0",
  "Ecozen18yearY4UUGS58",
  "Ecozen18yearY6O9RWGD",
  "Ecozen18yearYHAJURQT",
  "Ecozen18yearYO4JJY0R",
  "Ecozen18yearYP2UI61U",
  "Ecozen18yearYRDMXEUG",
  "Ecozen18yearYRN791TW",
  "Ecozen18yearYSN5YY7S",
  "Ecozen18yearYVAS49ZX",
  "Ecozen18yearYWYT25Y5",
  "Ecozen18yearZ0IKCW8B",
  "Ecozen18yearZ6NGGD55",
  "Ecozen18yearZCCZZ2S0",
  "Ecozen18yearZV66TBPK",
  "Ecozen18yearZWK4FQJ8",
  "Ecozen18yearZYRG1K53"
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

// Mã phải tồn tại trong ACCESS_CODE
if (!ACCESS_CODE.includes(inputCode)) {
    alert("❌ Sai mã quay hoặc đã được sử dụng!");
    return;
}
  /* TĂNG LƯỢT */
  spinCount++;

  spinning = true;

  const minSpins = 10;

  let targetAngle;

// Ưu tiên ép theo mã

let fixedPrize = null;

// Nếu mã có ép quà thì ưu tiên
if (FIXED_CODE_RESULTS.hasOwnProperty(inputCode)) {

    fixedPrize = FIXED_CODE_RESULTS[inputCode];

} else if (FIXED_RESULTS.hasOwnProperty(spinCount)) {

    // Không có mã ép thì dùng lượt quay
    fixedPrize = FIXED_RESULTS[spinCount];
}
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

   const codeIndex = ACCESS_CODE.indexOf(inputCode);

if (codeIndex !== -1) {

    ACCESS_CODE.splice(codeIndex, 1);

    localStorage.setItem(
        "ACCESS_CODE",
        JSON.stringify(ACCESS_CODE)
    );

    console.log("Đã xóa mã:", inputCode);
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
localStorage.removeItem("ACCESS_CODE");
location.reload();