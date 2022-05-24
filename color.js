totalSpring = document.getElementById('total-spring');
totalSummer = document.getElementById('total-summer');
totalAutumn = document.getElementById('total-autumn');
totalWinter = document.getElementById('total-winter');

const assessmentButton = document.getElementById
('assessment');
const detailButton = document.getElementById('detail');

//春
const spring = document.getElementsByClassName('spring');
const getCheckedCountSp = () =>{
  let sp = 0
  for (let a = 0; a < spring.length; a++){
    if(spring[a].checked){
      sp++
    }
  }
  totalSpring.innerText = (sp);
};

//夏
const summer = document.getElementsByClassName('summer');
const getCheckedCountSm = () =>{
  let sm = 0
  for(let b = 0; b < summer.length; b++){
    if(summer[b].checked){
      sm++
    }
  }
  totalSummer.innerText = (sm);
};

//秋
const autumn = document.getElementsByClassName('autumn');
const getCheckedCountAu = () =>{
  let au = 0
  for(let c = 0; c < autumn.length; c++){
    if(autumn[c].checked){
      au++
    }
  }
  totalAutumn.innerText = (au);
};

//冬
const winter = document.getElementsByClassName('winter');
const getCheckedCountWi = () =>{
  let wi = 0
  for(let d = 0; d < winter.length; d++){
    if(winter[d].checked){
      wi++
    }
  }
  totalWinter.innerText = (wi);
};

assessmentButton.addEventListener("click",getCheckedCountSp,false); //春
assessmentButton.addEventListener("click",getCheckedCountSm,false); //夏
assessmentButton.addEventListener("click",getCheckedCountAu,false); //秋
assessmentButton.addEventListener("click",getCheckedCountWi,false); //冬