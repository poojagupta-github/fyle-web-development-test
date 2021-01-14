var hideCategories = true;
var currentTestimonial = 1;
var elements = document.getElementsByClassName('category-row');
var testimonialElements = document.getElementsByClassName('testimonial-section')
var testimonialsList;

document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');

    document.getElementById('toggle-category').innerHTML='Show All Categories';

    elements[2].style.display = 'none';
    elements[3].style.display = 'none';

    document.getElementsByClassName("main-section")[0].scrollIntoView();

    var categoryList = [
        {
            icon: 'category-1.svg',
            header: 'Design & Development',
            bgColor: '#E2F4FF'
        },
        {
            icon: 'category-2.svg',
            header: 'Science & Technologies',
            bgColor: '#FEDEDE'
        },
        {
            icon: 'category-3.svg',
            header: 'Office Administrative',
            bgColor: '#FFF9DA'
        },
        {
            icon: 'category-4.svg',
            header: 'Property Development',
            bgColor: '#FFF9DA'
        },
        {
            icon: 'category-5.svg',
            header: 'Business Development',
            bgColor: '#E2F4FF'
        },
        {
            icon: 'category-6.svg',
            header: 'Admin & Accountant',
            bgColor: '#FEDEDE'
        },
        {
            icon: 'category-1.svg',
            header: 'Design & Development',
            bgColor: '#E2F4FF'
        },
        {
            icon: 'category-2.svg',
            header: 'Science & Technologies',
            bgColor: '#FEDEDE'
        },
        {
            icon: 'category-3.svg',
            header: 'Office Administrative',
            bgColor: '#FFF9DA'
        },
        {
            icon: 'category-4.svg',
            header: 'Property Development',
            bgColor: '#FFF9DA'
        },
        {
            icon: 'category-5.svg',
            header: 'Business Development',
            bgColor: '#E2F4FF'
        },
        {
            icon: 'category-6.svg',
            header: 'Admin & Accountant',
            bgColor: '#FEDEDE'
        }
    ]

    testimonialsList = [
        {
            name: 'Sam Shannon',
            title: 'Director'
        },
        {
            name: 'James Taylor',
            title: 'CEO'
        },
        {
            name: 'Joe Vince',
            title: 'Founder'
        }
    ]

    var categoryElements = document.getElementsByClassName('card col-4')
    for(var i=0; i<categoryElements.length; i++) {
        categoryElements[i].children[0].children[1].innerHTML = categoryList[i].header;
        categoryElements[i].children[0].children[0].children[0].src = 'assets/images/svg/'+ categoryList[i].icon;
        categoryElements[i].children[0].children[0].children[0].style.background = categoryList[i].bgColor;
    }
});

function toggleCategories () {
    if (hideCategories) {

        elements[2].style.display = 'flex';
        elements[3].style.display = 'flex';
        hideCategories = !hideCategories;

        document.getElementById('toggle-category').innerHTML='Hide Categories';
    } else {
        elements[2].style.display = 'none';
        elements[3].style.display = 'none';
        hideCategories = !hideCategories;

        document.getElementById('toggle-category').innerHTML='Show All Categories';
        document.getElementsByClassName("category-section")[0].scrollIntoView();

    }

}

function showPreviousTestimonial () {
    if (currentTestimonial === 1) {
        currentTestimonial = 3;
        testimonialElements[0].children[0].children[0].children[0].children[0].src = "assets/images/img/user_" + currentTestimonial +".png"; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[0].innerHTML = testimonialsList[currentTestimonial - 1].name; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[1].innerHTML = testimonialsList[currentTestimonial - 1].title;
    } else {
        currentTestimonial = currentTestimonial - 1;
        testimonialElements[0].children[0].children[0].children[0].children[0].src = "assets/images/img/user_" + currentTestimonial +".png"; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[0].innerHTML = testimonialsList[currentTestimonial - 1].name; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[1].innerHTML = testimonialsList[currentTestimonial - 1].title;

    }

}

function showNextTestimonial () {
    if (currentTestimonial === 3) {

        currentTestimonial = 1;
        testimonialElements[0].children[0].children[0].children[0].children[0].src = "assets/images/img/user_1.png"; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[0].innerHTML = testimonialsList[currentTestimonial - 1].name; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[1].innerHTML = testimonialsList[currentTestimonial - 1].title;
       
    } else {
        currentTestimonial = currentTestimonial + 1;
        testimonialElements[0].children[0].children[0].children[0].children[0].src = "assets/images/img/user_" + currentTestimonial +".png"; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[0].innerHTML = testimonialsList[currentTestimonial - 1].name; 
        testimonialElements[0].children[0].children[0].children[1].children[2].children[1].innerHTML = testimonialsList[currentTestimonial - 1].title;
    }

}
