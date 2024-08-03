



function calcMen(w,h,n){

  return  ((495/(1.0324 - 0.19077*Math.log10(w-n) + 0.15456*Math.log10(h)))-450).toFixed(2);
    
}


document.querySelector('.js-submit').addEventListener('click',()=>{

    let waist= document.querySelector('.js-waist').value;
   
    let neck=document.querySelector('.js-neck').value;
    let gender=document.querySelector('.js-gender').value;
    let height;

    if(document.querySelector('.height-unit').value=='cm'){
      height=document.querySelector('.js-height').value;
    }
    else{
      height=(document.querySelector('.feet').value*30.48)+(document.querySelector('.inch').value*2.54);
    }
    if(document.querySelector('.neck-unit').value=='in'){
      neck=neck*2.54;
    }
    if(document.querySelector('.waist-unit').value=='in'){
      waist=waist*2.54;
    }

    console.log(waist);
    console.log(neck);
    console.log(height);


    if(gender==='Male'){
        document.querySelector('.answer').innerHTML=`${calcMen(waist,height,neck)}%`
    }else{
      document.querySelector('.answer').innerHTML=`Sorry idk`;
    }
    

    
})


document.querySelector('.height-box').addEventListener('click',()=>{


  document.querySelector('.height-unit').addEventListener('change',(event)=>{
    
    if(document.querySelector('.height-unit').value=='ft/inches'){
      console.log('helo in')
      document.querySelector('.height-box').innerHTML=`
          <input type="" class="height js-height feet"  placeholder="feet*" style="width: 30%;">
          <input type="" class="height js-height inch"  placeholder="inch*" style="width: 30%;">
          <select class="height-unit" style="width: 45px;">
              <option class="op">ft/inches</option>
              <option class="op">cm</option>
          </select>
      ` 
    }
    else{
      console.log('helo cm')
      document.querySelector('.height-box').innerHTML=`
         <input type="" class="height js-height"  placeholder="Height*">
         <select class="height-unit" style="width: 45px;">
    <option class="op">cm</option>
    <option class="op">ft/inches</option></select>
      `
    }
    
    })
    



})





/* <select class="height-unit" style="width: 45px;">
<option class="op">cm</option>
<option class="op">ft/inches</option></select>



<select class="height-unit" style="width: 45px;">
          <option class="op">ft/inches</option>
          <option class="op">cm</option>
      </select>*/