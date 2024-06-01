function initSectionBackToTop(){
  const div = $("#section-btn-back-top");
  if(div){
      div.load("components/btn-back_to_top.html"); 
  }
}
function initSectionConfigColor(){
  const div = $("#section-config-color");
  if(div){
      div.load("components/config-color.html"); 
  }
}
function initSectionHome(){
  const div = $("#section-home");
  if(div){
      div.load("components/home.html"); 
  }
}
function initSectionAbout(){
  const div = $("#section-about");
  if(div){
      div.load("components/about.html"); 
  }
}
function initSectionService(){
  const div = $("#section-service");
  if(div){
      div.load("components/service.html"); 
  }
}
function initSectionPortfolio(){
  const div = $("#section-portfolio");
  if(div){
      div.load("components/portfolio.html"); 
  }
}
function initSectionBlog(){
  const div = $("#section-blog");
  if(div){
      div.load("components/blog.html"); 
  }
}
function initSectionContact(){
  const div = $("#section-contact");
  if(div){
      div.load("components/contact.html"); 
  }
}
function initSectionFooter(){
  const div = $("#section-footer");
  if(div){
      div.load("components/footer.html"); 
  }
}
var attempsOfInitSection = 0;
function initSection() {
  try {
      initSectionBackToTop();
      initSectionConfigColor()
      initSectionHome();
      initSectionAbout();
      initSectionService();
      initSectionPortfolio();
      initSectionBlog();
      initSectionContact();
      initSectionFooter();
      new WOW().init();
    } catch (error) {
      console.log(error); 
      if(error.message.includes("Cannot read property 'load' of undefined") && attempsOfInitSection < 3){
          attempsOfInitSection++;
          setTimeout(initSection, 1000);
      }
  }
}

$(document).ready(function () {
  initSection();
});
