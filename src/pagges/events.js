// nav toggle functions
export const Toggle = (action) => {
  if (action == "remove") {
    const elmnt = document.getElementsByClassName("Mobile");
    elmnt[0].classList.remove("hidden");
  }
  if (action == "add") {
    const elmnt = document.getElementsByClassName("Mobile");
    elmnt[0].classList.add("hidden");
  }
};
// nav toggle functions end
// mobile filter functions start
export const hideFilter = (action) => {
  const element = document.getElementsByClassName("filterContainer");
  element[0].classList.remove("widthq");
};
export const showFilterF = (isOpen) => {
  if (isOpen) {
    const element = document.getElementsByClassName("filterContainer");
    element[0].classList.add("widthq");
  } else {
    const element = document.getElementsByClassName("filterContainer");
    element[0].classList.remove("widthq");
  }
};
// mobile filter functions end

// user info script
export const change = (index, clss2, removeClass, removeClass2) => {
  if (index == removeClass) {
  } else {
    const remoClass = document.getElementsByClassName(removeClass);
    remoClass[0].classList.remove(`activeuser`);

    const addClass = document.getElementsByClassName(index);
    addClass[0].classList.add("activeuser");
  }

  if (clss2 == removeClass2) {
  } else {
    const remoClass = document.getElementsByClassName(removeClass2);
    remoClass[0].classList.remove(`active_u`);

    const addClass = document.getElementsByClassName(clss2);
    addClass[0].classList.add("active_u");
  }
};
// user info script end
// about us secsion
export const changeSecsion = (index, removeClass) => {
  if (index == removeClass) {
  } else {
    const remoClass = document.getElementsByClassName(removeClass);
    remoClass[0].classList.remove(`active-cecsion`);

    const addClass = document.getElementsByClassName(index);
    addClass[0].classList.add("active-cecsion");
  }
};
// about us secsion end
// selected color
export const selectedColor = (index, removeClass) => {
  const remoClass = document.getElementsByClassName(removeClass);
  remoClass[0].classList.remove(`selectedColor`);

  const addClass = document.getElementsByClassName(index);
  addClass[0].classList.add("selectedColor");
};
export const selectedColor2 = (index, removeClass) => {
  const remoClass = document.getElementsByClassName(removeClass);
  remoClass[0].classList.remove(`colorselected`);

  const addClass = document.getElementsByClassName(index);
  addClass[0].classList.add("colorselected");
};
// selected color end
// scroll to top
export const btnTop = () => {
  window.addEventListener("scroll", () => {
    var pos = window.pageYOffset;
    if (pos > 500) {
      const btn = document.getElementsByClassName("scrollTop");
      btn[0].classList.add("showbtn");
    } else if (pos < 500) {
      const btn = document.getElementsByClassName("scrollTop");
      btn[0].classList.remove("showbtn");
    }
  });
};
export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// scroll to top

// User Registration
export const checkUserData = (data) => {
  const error = {
    status: "",
    massage: "",
  };
  if (data.firstName == "") {
    error.massage = "please enter first name";
    error.status = "417";
  } else {
    if (data.lastName == "") {
      error.massage = "please enter last name";
      error.status = "417";
    } else {
      if (data.emailId == "") {
        error.massage = "please enter Email ID";
        error.status = "417";
      } else {
        if (data.phoneNumber == "") {
          error.massage = "Please Enter Mobile Number";
          error.status = "417";
        } else {
          if (data.password == "") {
            error.massage = "please enter password";
            error.status = "417";
          } else {
            if (data.confirmPassword !== data.password) {
              error.massage = "please confirm your password";
              error.status = "417";
            } else {
              error.massage = "you are sign up successfully";
              error.status = "200";
            }
          }
        }
      }
    }
  }
  return error;
};
export const userRegistration = () => {};
// User Registration
