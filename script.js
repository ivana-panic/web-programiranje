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
document.getElementById("submit").addEventListener("click", function proveri() {
  var name = document.querySelector("#form-name").value;
  var email = document.querySelector("#form-email").value;
  var phone = document.querySelector("#form-phone").value;
  var text = document.querySelector("#form-text").value;

  var regexName = /^[A-Z][a-z]+$/;
  if (!regexName.test(name)) {
    document.querySelector("name").classList.remove("Tacno");
    document.querySelector("name").classList.add("Netacno");
    document.querySelector("nameAlert").innerHTML =
      "Please write a correct Name!";
  } else {
    document.querySelector("name").classList.remove("Netacno");
    document.querySelector("name").classList.add("Tacno");
    document.querySelector("nameAlert").innerHTML = "";
  }
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!regexEmail.test(email)) {
    document.querySelector("email").classList.remove("Tacno");
    document.querySelector("email").classList.add("Netacno");
    document.querySelector("emailAlert").innerHTML =
      "Please write a correct Name!";
  } else {
    document.querySelector("email").classList.remove("Netacno");
    document.querySelector("email").classList.add("Tacno");
    document.querySelector("emailAlert").innerHTML = "";
  }
  var regexPhone = /^06[01234569]\/[\d]{6,7}$/;
  if (!regexPhone.test(phone)) {
    document.querySelector("phone").classList.remove("Tacno");
    document.querySelector("phone").classList.add("Netacno");
    document.querySelector("phoneAlert").innerHTML =
      "Please write a correct phone!";
  } else {
    document.querySelector("phone").classList.remove("Netacno");
    document.querySelector("phone").classList.add("Tacno");
    document.querySelector("phoneAlert").innerHTML = "";
  }
  var regexText = /^[A-ZČĆŽŠĐ][a-zčćžšđ]([\d \w]{5,100})$/;
  if (!regexText.test(text)) {
    document.querySelector("text").classList.remove("Tacno");
    document.querySelector("text").classList.add("Netacno");
    document.querySelector("textAlert").innerHTML =
      "Please write a correct message!";
  } else {
    document.querySelector("text").classList.remove("Netacno");
    document.querySelector("text").classList.add("Tacno");
    document.querySelector("textAlert").innerHTML = "";
  }
});

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
});
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
