$(document).ready(function() {
  const apiSearchBaseUrl = searchTerm => {
    return `http://openlibrary.org/search.json?title=${searchTerm}`;
  };
  const apiCoverBaseUrl = (bookId, size) => {
    return `http://covers.openlibrary.org/b/id/${bookId}-${size}.jpg`;
  };

  let suggestedBooks = [];
  const searchJquery = $("#bookListing");
  const search = document.querySelector("#search");

  search.addEventListener("input", event => {
    if (event.target.value.length > 1) {
      getSearchResults(event.target.value).then(data => {
        const filterOutNonCover = data.docs.filter(ele => {
          return ele.cover_i;
        });

        const topResults = filterOutNonCover.slice(0, 6);
        suggestedBooks = [];
        const finalResult = topResults.map(ele => {
          return genereateBookItem(ele.title);
        });
        suggestedBooks.push(...finalResult);
        console.log(suggestedBooks);
        searchJquery.empty();
        $.each(suggestedBooks, function(i, val) {
          searchJquery.append(val);
        });
      });
    }
  });

  const getSearchResults = async searchTerm => {
    const results = await fetch(apiSearchBaseUrl(searchTerm), {
      method: "GET"
    });
    return results.json();
  };

  const genereateBookItem = title => {
    return $(`<div class="col-md-6 col-lg-4">
         <div class="trip_image1">
           <div class="content_trip_image">
             <button class="px-3 mb-3 category bg-primary btn" style="width: 100px;
                       margin: 0 auto; background-color: #f0ad4e;">$340.00</button>
             <h2 class="headline_trip">${title}</h2>
             <button type="button" class="btn btn-secondary" style="width: 40%;
                       margin: 0 auto; background-color: #f0ad4e; color: white; margin-top: 17px;">View more</button>
           </div>
         </div>
       </div>`);
  };
});
// GALLERY SLIDER
$(document).ready(function() {
  $(".slider").bxSlider({
    autoControls: true,
    auto: true,
    pager: true,
    slideWidth: 800,
    mode: "fade",
    captions: true,
    speed: 1000
  });
});

//FORM VALIDATION
document
  .getElementById("submit")
  .addEventListener("click", function proveri(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var name = document.querySelector("#form-name").value;
    var email = document.querySelector("#form-email").value;
    var phone = document.querySelector("#form-phone").value;
    var text = document.querySelector("#form-text").value;

    var inputName = document.querySelector("#form-name");
    var inputEmail = document.querySelector("#form-email");
    var inputPhone = document.querySelector("#form-phone");
    var inputText = document.querySelector("#form-text");

    var regexName = /^[A-Z][a-z]+$/;
    if (!regexName.test(name)) {
      inputName.classList.remove("Tacno");
      inputName.classList.add("Netacno");
      inputName.innerHTML = "Please write a correct Name!";
    } else {
      inputName.classList.remove("Netacno");
      inputName.classList.add("Tacno");
      inputName.innerHTML = "";
    }
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email)) {
      inputEmail.classList.remove("Tacno");
      inputEmail.classList.add("Netacno");
      inputEmail.innerHTML = "Please write a correct Name!";
    } else {
      inputEmail.classList.remove("Netacno");
      inputEmail.classList.add("Tacno");
      inputEmail.innerHTML = "";
    }
    var regexPhone = /^06[01234569]\/[\d]{6,7}$/;
    if (!regexPhone.test(phone)) {
      inputPhone.classList.remove("Tacno");
      inputPhone.classList.add("Netacno");
      inputPhone.innerHTML = "Please write a correct phone!";
    } else {
      inputPhone.classList.remove("Netacno");
      inputPhone.classList.add("Tacno");
      inputPhone.innerHTML = "";
    }
    var regexText = /^[A-ZČĆŽŠĐ][a-zčćžšđ]([\d \w]{5,100})$/;
    if (!regexText.test(text)) {
      inputText.classList.remove("Tacno");
      inputText.classList.add("Netacno");
      inputText.innerHTML = "please";
      inputText.innerHTML.style.color = "red";
    } else {
      inputText.classList.remove("Netacno");
      inputText.classList.add("Tacno");
      inputText.innerHTML = "";
    }
  });
//FOOTER VALIDATION
document
  .getElementById("footer-button")
  .addEventListener("click", function validationF(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var emailFooter = document.querySelector("#ffooter").value;
    var inputEmailFooter = document.querySelector("#ffooter");

    var regexemailFooter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexemailFooter.test(emailFooter)) {
      inputEmailFooter.classList.remove("Tacno");
      inputEmailFooter.classList.add("Netacno");
      inputEmailFooter.innerHTML = "Please write a correct email!";
    } else {
      inputEmailFooter.classList.remove("Netacno");
      inputEmailFooter.classList.add("Tacno");
      inputEmailFooter.innerHTML = "";
    }
  });
//FOOTER VALIDATION END
$(document).ready(function() {
  $("#goToHome").click(function() {
    $("html").animate(
      {
        scrollTop: $("#motivation_text_image").offset().top - 55
      },
      500
    );
  });
  $("#goToBook").click(function() {
    $("html").animate(
      {
        scrollTop: $("#bookListing").offset().top - 55
      },
      500
    );
  });
  $("#goToGallery").click(function() {
    $("html").animate(
      {
        scrollTop: $("#wrapp_slider").offset().top - 55
      },
      500
    );
  });
  $("#goToAuthor").click(function() {
    $("html").animate(
      {
        scrollTop: $(".author").offset().top - 55
      },
      500
    );
  });

  $("#goToContact").click(function() {
    $("html").animate(
      {
        scrollTop: $(".contact-image").offset().top - 55
      },
      500
    );
  });
  $("#goToAbout").click(function() {
    $("html").animate(
      {
        scrollTop: $("#library_info").offset().top - 55
      },
      500
    );
  });

  $("#footer-home").click(function() {
    $("html").animate(
      {
        scrollTop: $("#motivation_text_image").offset().top - 55
      },
      500
    );
  });
  $("#footer-book").click(function() {
    $("html").animate(
      {
        scrollTop: $("#bookListing").offset().top - 55
      },
      500
    );
  });
  $("#footer-author").click(function() {
    $("html").animate(
      {
        scrollTop: $(".author").offset().top - 55
      },
      500
    );
  });
  $("#footer-contact").click(function() {
    $("html").animate(
      {
        scrollTop: $(".contact-image").offset().top - 55
      },
      500
    );
  });
});
//MODAL ZA SEKCIJU ABOUTH
window.onload = function() {
  var Mymodal = document.getElementById("modal");
  var btn = document.getElementById("MyBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    Mymodal.style.display = "block";
  };
  span.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == Mymodal) {
      Mymodal.style.display = "none";
    }
  };
};
