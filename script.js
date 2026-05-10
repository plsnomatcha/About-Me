let stack = [];

window.onload = function() {
  
  const backBtn = document.querySelector(".back");
  const loading = document.getElementById("loadingScreen");
  
  function switchScreen(id) {
    
    document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("active");
    });
    
    document.getElementById(id).classList.add("active");
  }
  
  /* LOADING */
  function showLoading(callback) {
    
    loading.classList.add("show");
    
    setTimeout(() => {
      
      loading.classList.remove("show");
      
      callback();
      
    }, 1500);
    
  }
  
  /* NEXT SCREEN WITH LOADING */
  window.goTo = function(id) {
    
    showLoading(() => {
      
      switchScreen(id);
      
      stack.push(id);
      
      backBtn.classList.add("show");
      
    });
    
  }
  
  /* BACK WITHOUT LOADING */
  window.back = function() {
    
    stack.pop();
    
    let prev = stack.length ?
      stack[stack.length - 1] :
      "screen1";
    
    switchScreen(prev);
    
    if (prev === "screen1") {
      backBtn.classList.remove("show");
    }
    
  }
  
}