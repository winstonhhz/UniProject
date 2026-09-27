
let website_logo = document.querySelector("#website_logo");
let change_background_image = document.querySelector(".change_background_image");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
//Calculate Total
let user_total;
function calculateTotal(){
    user_total = (data + option_value + price_for_upload + logo_price).toFixed(2);
    document.querySelector(".quantity_value").innerHTML = `$${user_total}`;
    console.log(user_total);
    document.querySelector("#calculate_total").value = `${user_total}`;
    return user_total;
}; 
//Change Background
function logo_change_background() {
    body.style.backgroundColor = "gray";
    body.style.backgroundImage = "none";
}
function default_background(){
    body.style.backgroundColor = "darkgray";
    body.style.backgroundImage = "url(./image/webpage_background.png)";
}
// Gender Box Hover
women_box = document.querySelector(".women_box");
men_box = document.querySelector(".men_box");

function women_mouseover(){
    body.style.backgroundImage = "url(./image/women_background.png)";
}

function men_mouseover(){
    body.style.backgroundImage = "url(./image/men_background.png)";
}


/*men_box.addEventListener("mouseover", function(){
    body.style.backgroundImage = "url(/image/men_background.png)";
}); 
men_box.addEventListener("mouseout",function(){
    body.style.backgroundImage = "none";
}); */
// Garment Image Being Clicked
let garment_image = document.querySelectorAll(".garment_image");
let data = 0;
let chosen_garment = "None";
let tee_shirt = garment_image[0];
let polo_shirt = garment_image[1];
let button_up = garment_image[2];
let hoodie = garment_image[3];
console.log(garment_image[0]);
function default_all_unwanted_style(){
    garment_image.forEach(deselect =>{
        deselect.style.opacity = "0.6";
        deselect.style.backgroundColor = "#faebd75d";
        deselect.style.boxShadow = "none";
    });
};

garment_image.forEach(chosen_garment_image => {
    chosen_garment_image.addEventListener("click",function(){
        default_all_unwanted_style();
        this.style.opacity = "1";
        this.style.boxShadow = "0 5px 15px #000";
        this.style.backgroundColor = "#D1D1CF";
        this.style.transition = "all 0.3s";
        chosen_garment = chosen_garment_image.getAttribute("alt");
        data = Number(Number(this.getAttribute("data-price")).toFixed(2));
        console.log(this);
        console.log(data);
        calculateTotal();
    });
});
//Garment Div Hover
tee_shirt.addEventListener("mouseover", () => {
    body.style.backgroundImage = "url(./image/tee_shirt_background.png)";
});
polo_shirt.addEventListener("mouseover", () => {
    body.style.backgroundImage = "url(./image/polo_shirt.png)";
});
button_up.addEventListener("mouseover", () => {
    body.style.backgroundImage = "url(./image/button_up.png)";
});
hoodie.addEventListener("mouseover", () => {
    body.style.backgroundImage = "url(./image/hoodie.png)";
});



//Design Image
let design_idea = document.querySelectorAll(".design_idea picture img");
let first_design = design_idea[0];
let second_design = design_idea[1];
let third_design = design_idea[2];
let fourth_design = design_idea[3];
let fifth_design = design_idea[4];
let sixth_design = design_idea[5];


first_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile1_background.png)";
});
second_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile2_background.png)";
});
third_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile3_background.png)";
});
fourth_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile4_background.png)";
});
fifth_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile5_background.png)";
});
sixth_design.addEventListener("mouseover",function(){
    body.style.backgroundImage = "url(./image/tile6_background.png)";
});


//Select design option
let design_option = document.querySelector("table tr td select");
let option = document.querySelectorAll("#design_option_class option")[4];
let option_value = 0;

/*for (let i = 0 ; i < option_chosen.length; i ++){
    console.log(i);
    option_chosen[i].addEventListener("click", function(){
        option_value = option_chosen[i];
        console.log(option_value);
    });
};*/

/* option_chosen.forEach(selection_option_chosen => {
    console.log(selection_option_chosen);
    console.log(`Hello ${i}`);
    selection_option_chosen.addEventListener("click",function(){
        console.log("Hello" + this);
        option_value = this;
        console.log(option_value);
    });
}); */


/*design_option.addEventListener("change",function(){
    //option_value = Number(design_option[design_option.selectedIndex].getAttribute("value")).toFixed(2);
    option_value = Number(Number(design_option.value).toFixed(2));
    console.log(option_value);
    calculateTotal();
}); */ 

let for_select = document.querySelector(".for_select");
let dropdown_menu_ul = document.querySelector(".dropdown_menu ul");
let menu_list = document.querySelectorAll(".dropdown_menu ul li");
let selected = document.querySelector(".selected");
let dropdown_arrow = document.querySelector(".dropdown_arrow");
let chosen_design = "None";

for_select.addEventListener("click", function(){
    if (dropdown_menu_ul.style.display == "none"){
        dropdown_menu_ul.style.display = "block";
        dropdown_menu_ul.style.opacity = "1";
        for_select.style.border = "none";
        dropdown_arrow.style.transform = "rotate(180deg)";
    }
    else{
        dropdown_menu_ul.style.display = "none";
        dropdown_menu_ul.style.opacity = "0";
        for_select.style.border = "1px solid black";
        dropdown_arrow.style.transform = "rotate(0deg)";
    };
});


menu_list.forEach(each_list => {
    each_list.addEventListener("click", function(){
        chosen_design = this.getAttribute("alt");
        selected.innerHTML = this.innerHTML;
        dropdown_menu_ul.style.display = "none";
        dropdown_menu_ul.style.opacity = "0";
        for_select.style.border = "1px solid black";
        dropdown_arrow.style.transform = "rotate(0deg)";
        option_value = Number(Number(this.getAttribute("data-select")).toFixed(2));
        calculateTotal();
    });
});


//Checked Box
let logo_price = 0;
let include_logo = document.querySelector(".include_logo");

include_logo.addEventListener("click", function(){
    if (include_logo.checked){
        console.log("Its checked!");
        logo_price = Number(Number(include_logo.getAttribute("value")).toFixed(2));
        console.log(logo_price);
        calculateTotal();
    }
    else{
        console.log("Not Checked Yet");
        logo_price -= Number(Number(include_logo.getAttribute("value")).toFixed(2));
        console.log(logo_price);
        calculateTotal();
    };
});

//User Upload
let user_design_upload = document.querySelector("#user_design_upload");
let price_for_upload = 0;

user_design_upload.addEventListener("change", function(){
    price_for_upload = Number(Number(this.getAttribute("value")).toFixed(2));
    calculateTotal();
});


user_total = calculateTotal();
console.log(user_total);
//Proceed payment
let discount = false;
let new_total = 0;
let total_section = document.querySelector(".total_section");
let total_table = document.querySelector(".totalPayment_table");
let addRow = total_table.insertRow(1)
let cell_1 = addRow.insertCell(0), cell_2 = addRow.insertCell(1), cell_3 = addRow.insertCell(2), 
cell_4 = addRow.insertCell(3), cell_5 = addRow.insertCell(4), cell_6 = addRow.insertCell(5);
let discount_price = 0;
function totalPayment(){
    total_section.style.display = "block";
    if (Number(user_total) >= 150){
        if (discount == false){
            window.alert("You're Eligible For a 10% Discount");
            discount = true;
        };
        discount_price = Number(user_total) * 0.1;
    }
    else{
        discount_price = 0;
    };
    new_total = (Number(user_total) - discount_price).toFixed(2);
    document.querySelector(".proceed_payment h2").innerHTML = `Please Pay: $${new_total}`;

    cell_1.innerHTML = `${chosen_garment} ($${(data).toFixed(2)})`;
    cell_2.innerHTML = `${chosen_design} ($${(option_value).toFixed(2)})`;
    cell_3.innerHTML = `$${(price_for_upload).toFixed(2)}`;
    cell_4.innerHTML = `$${(logo_price).toFixed(2)}`;
    cell_5.innerHTML = `$${(discount_price).toFixed(2)}`;
    cell_6.innerHTML = `$${new_total}`;
};

function pay_clicked(){
    window.alert("Thank You For Purchasing");
};