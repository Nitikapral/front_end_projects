const back = (id, ci) => {
  let back_data = document.getElementById(id);
  let c = document.getElementById(ci);
  back_data.style.display = "block";
  c.style.display = "none";
};
const next = (id, ci) => {
  let back_data = document.getElementById(id);
  let c = document.getElementById(ci);
  back_data.style.display = "block";
  c.style.display = "none";
};

const showPopUp = (p1, p2, p3, p4, p5) => {
  let d = document.getElementById(p1);
  let e = document.getElementById(p2);
  let f = document.getElementById(p3);
  let g = document.getElementById(p4);
  let h = document.getElementById(p5);
  d.style.display = "block";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";
  h.style.display = "none";
};
