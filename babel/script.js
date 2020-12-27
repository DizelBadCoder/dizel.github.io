(function fullpage() {
  const wrapper = document.querySelector(".wrapper");
  const about = document.querySelector(".section-about");
  let num = 1;
  function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }




  wrapper.addEventListener("wheel", (e) => {
    let myEfficientFn = throttle(function() {
      if (e.deltaY > 0) {
    if(num < 3){
        num++
        document
          .getElementById(`section_${num}`)
          .scrollIntoView({ block: "center", inline: "center" });
          console.log(num);
    }
} else {
   
  if(num > 1){
        num--
        document
          .getElementById(`section_${num}`)
          .scrollIntoView({ block: "center", inline: "center" });
          console.log(num);
  }
}
  }, 200);
  myEfficientFn()
  });

})();
