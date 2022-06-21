
let productarray = JSON.parse(localStorage.getItem("surajKumarData")) || []
displayall(productarray)


function displayall(productarray) {
    let totalpricecart = 0;
    let cartquantity = 1;
    let subtotal1;
    // let theprice;
    // let inputvalue;

    document.querySelector("#jsrepeat").innerHTML = ""

    productarray.forEach(function (elem, index) {

        let mainrepeat = document.createElement("div")
        mainrepeat.setAttribute("id", "mainrepeat")

        let bodyall = document.createElement("div")
        bodyall.setAttribute("id", "bodyall")

        let imagediv = document.createElement("div")
        imagediv.setAttribute("id", "imagediv")
        let image = document.createElement("img")
        image.setAttribute("src", elem.image)

        let itemdetails = document.createElement("div")
        itemdetails.setAttribute("id", "itemdetails")

        let heading = document.createElement("h5")
        heading.innerText = elem.name

        let pricing = document.createElement("div")

        let price = document.createElement("div")
        let theprice = Number(elem.price)
        // console.log(theprice)
        price.innerText = "₹" + theprice
        let input = document.createElement("input")
        input.setAttribute("value", 1)
        input.setAttribute("id","inputquan")
        let inputvalue = (input.value)
        // console.log(inputvalue)
        subtotal1 = document.createElement("div")
        subtotal1.innerText = "₹" + theprice

        // cartquantity=cartquantity*(theprice*inputvalue)
        totalpricecart = totalpricecart + theprice + 55
        localStorage.setItem("subtotalvalue", totalpricecart)
        document.querySelector("#subtotal2").innerText = "₹" + totalpricecart + ".00"
        document.querySelector("#GST").innerText = "₹" + totalpricecart + ".00"

        let shiping = document.querySelector("#shiping").innerText = "₹" + "55.00"




        let hr = document.createElement("hr")
        hr.setAttribute("id", "hrsecond")


        let mer = document.createElement("div")
        mer.setAttribute("id", "MER")

        let merdiv1 = document.createElement("div")
        let btn1 = document.createElement("button")
        btn1.innerText = "Move to Wishlist"

        let merdiv2 = document.createElement("div")
        let btn2 = document.createElement("button")
        btn2.innerText = "Edit"

        let merdiv3 = document.createElement("div")
        let btn3 = document.createElement("button")
        btn3.innerText = "Remove item"
        btn3.addEventListener("click", function () {
            deleteitemcart(index)
            displayall(productarray)
        })


        imagediv.append(image)
        pricing.append(price, input, subtotal1)
        itemdetails.append(heading, pricing)
        bodyall.append(imagediv, itemdetails)
        merdiv1.append(btn1)
        merdiv2.append(btn2)
        merdiv3.append(btn3)
        mer.append(merdiv1, merdiv2, merdiv3)

        mainrepeat.append(bodyall, hr, mer)

        document.querySelector("#jsrepeat").append(mainrepeat)



    })
    // totalpricecart = totalpricecart+55 + theprice
    document.querySelector("#USC").addEventListener("click", uscclick)

    function uscclick() {

        // subtotal1.innerText = "₹" + cartquantity
        // let pricecart= "₹" + totalpricecart

        document.querySelector("#subtotal2").innerText = totalpricecart

    }

    function deleteitemcart(index) {
        productarray.splice(index, 1)
        displayall(productarray)
        localStorage.setItem("surajKumarData",JSON.stringify(productarray))
    }

    document.querySelector("#APPLYDISCOUNT").addEventListener("click", APPLYDISCOUNT)

    totalpricecart = totalpricecart - (totalpricecart / 100) * 30
    totalpricecart = totalpricecart.toFixed(2)

    function APPLYDISCOUNT() {
        let coupon = document.querySelector("#coupon").value
        let h6 = document.querySelector("#h6")

        if (coupon === "hilton") {
            document.querySelector("#subtotal2").innerText = "₹" + totalpricecart
            document.querySelector("#GST").innerText = "₹" + totalpricecart
            h6.innerText = "Promocode Applied"
            h6.style.color = "green"
        } else {
            h6.innerText = "Wrong Promocode"
            h6.style.color = "red"
        }
    }

    document.querySelector("#main2>div>h4").addEventListener("click", nextpage)

    function nextpage() {
        window.location.href = "Adress.html"
        localStorage.getItem("subtotalvalue")
    }


}



let arrObj = [
    {
        bbcream: [
            { name: "BB Cream", link: "#" },
            { name: "Blush", link: "#" },
            { name: "Bronzer", link: "#" },
            { name: "CC Cream", link: "#" },
            { name: "Contour", link: "#" },
            { name: "Concealer", link: "#" },
            { name: "Compact & Powder", link: "#" },
            { name: "Face Primer", link: "#" },
            { name: "Foundation", link: "#" },
            { name: "Highlighter", link: "#" },
            { name: "Loose Powder", link: "#" },
            { name: "Makeup Kits", link: "#" },
            { name: "Makeup Remover", link: "#" },
            { name: "Setting Spray", link: "#" }
        ]
    },
    {
        eye: [
            { name: "Contact Lenses", link: "#" },
            { name: "Eye Kit", link: "#" },
            { name: "Eyeliner", link: "#" },
            { name: "Eye Shadow", link: "#" },
            { name: "Eye Primer", link: "#" },
            { name: "Eye-Palettes", link: "#" },
            { name: "Eye Makeup Remover", link: "#" },
            { name: "Eye Brow Enchancers", link: "#" },
            { name: "False", link: "#" },
            { name: "Kajal", link: "#" },
            { name: "Mascara", link: "#" },
            { name: "Under Eye Concealer", link: "#" },


        ]
    },
    {
        lips: [
            { name: "Lipstick", link: "#" },
            { name: "Liquid Lipstick", link: "#" },
            { name: "Liner", link: "#" },
            { name: "Gloss", link: "#" },
            { name: "Balm", link: "#" },
            { name: "Crayon", link: "#" },
            { name: "Stain", link: "#" },
            { name: "Plumper", link: "#" },

        ]
    },
    {
        nails: [
            { name: "Manicure & Pedicure Kits", link: "#" },
            { name: "Nail Polish", link: "#" },
            { name: "Nail Care", link: "#" },
            { name: "Nail Polish Sets", link: "#" },
            { name: "Nail Art Kits", link: "#" },
            { name: "Nail Polish Remover", link: "#" },
        ]
    },

    {
        toolbrushes: [
            { name: "Blush Brush", link: "#" },
            { name: "Eyelash Curfers", link: "#" },
            { name: "Eye Brush", link: "#" },
            { name: "Face Brush", link: "#" },
            { name: "Brush", link: "#" },
            { name: "Makeup Pouches", link: "#" },
            { name: "Mirrors", link: "#" },
            { name: "Spongers & Applicators", link: "#" },
            { name: "Sharpeners", link: "#" },
            { name: "Tweezers", link: "#" },
        ]
    },





]
let skinarr = [
    {
        skincare: [
            { name: "Dark Circles", link: "#" },
            { name: "Eye Contour Care", link: "#" },
            { name: "Eye Cream", link: "#" },
            { name: "Eye Masks", link: "#" },
            { name: "Eye Serums", link: "#" },
            { name: "Puffiness", link: "#" },
            { name: "Under Eye Creams", link: "#" },
            { name: "Under Eye Wrinkles", link: "#" }

        ]
    },
    {
        facecare: [
            { name: "Anti-Ageing Creams", link: "#" },
            { name: "Bleach Creams", link: "#" },
            { name: "Brightening Cream", link: "#" },
            { name: "Face Wash", link: "#" },
            { name: "Facial Wipes", link: "#" },
            { name: "Face Oil", link: "#" },
            { name: "Face Cleansers", link: "#" },
            { name: "Facial Kits", link: "#" },
            { name: "Face Tools", link: "#" },
            { name: "Moisturizer", link: "#" },
            { name: "Mask & Peels", link: "#" },
            { name: "Serum", link: "#" },
            { name: "Toner & Astringents", link: "#" }


        ]
    },
    {
        bodycare: [
            { name: "All Cream", link: "#" },
            { name: "Body Moisturizers", link: "#" },
            { name: "Body Toners", link: "#" },
            { name: "Body Sun Care", link: "#" },
            { name: "Brightening Lotion", link: "#" },
            { name: "Dark Circles & Wrinkles", link: "#" },
            { name: "Day Cream", link: "#" },
            { name: "Foot Cream", link: "#" },
            { name: "Hair Remover Cream", link: "#" },
            { name: "Hand Creams", link: "#" },
            { name: "Hand & Feet", link: "#" },
            { name: "Kits & Combos", link: "#" },
            { name: "Night Cream", link: "#" },
            { name: "Neck Creams", link: "#" },

        ]
    }
]
let hairarr = [
    {
        haircare: [
            { name: "Color Protection", link: "#" },
            { name: "Dnadruff", link: "#" },
            { name: "Dry Shampoo", link: "#" },
            { name: "Gels & Waxes", link: "#" },
            { name: "Hair Spray", link: "#" },
            { name: "Hair Color/Dye", link: "#" },
            { name: "Hair Creams & Masks", link: "#" },
            { name: "Hair Styling", link: "#" },
            { name: "Hairfall & Thinning", link: "#" },
            { name: "Straightners", link: "#" }

        ]
    },
    {
        hairloss: [
            { name: "Conditioner", link: "#" },
            { name: "Hair Oil", link: "#" },
            { name: "Hair Serum", link: "#" },
            { name: "Hair Growth Solutions", link: "#" },
            { name: "Shampoo", link: "#" }
        ]
    },

]
let personalCarearr = [
    {
        bodybath: [
            { name: "Body Cleansers", link: "#" },
            { name: "Body Massage Oil", link: "#" },
            { name: "Body Wash", link: "#" },
            { name: "Creams", link: "#" },
            { name: "Essential Oils", link: "#" },
            { name: "Foot Cream", link: "#" },
            { name: "Scrubs & Exfoliants", link: "#" },
            { name: "Ubtan & Face Packs", link: "#" },
        ]
    },


    {
        bathaccess: [
            { name: "Bath Brushes", link: "#" },
            { name: "Loofahs", link: "#" },
            { name: "Shower Caps", link: "#" },
            { name: "Sponges", link: "#" },

        ]
    },
    {
        bathshower: [
            { name: "Body Soaps", link: "#" },
            { name: "Shower Gel", link: "#" }

        ]
    }

]
let mom_baby_care_arr = [
    {
        babycare: [
            { name: "Bath Time", link: "#" },
            { name: "Diapers", link: "#" },
            { name: "Loations & Creams", link: "#" },
            { name: "Oils", link: "#" },
            { name: "Powder", link: "#" },
            { name: "Shampoo", link: "#" },
            { name: "Soaps", link: "#" },
            { name: "Sterilizer & Cleaners", link: "#" },
            { name: "Rash Cream", link: "#" },
            { name: "Wipes", link: "#" }

        ]
    },
    {
        momcare: [
            { name: "Loations & Creams", link: "#" },
            { name: "Personal Care", link: "#" },

        ]
    }
]
let ayurveda = [
    {
        natskincare: [
            { name: "Body Wash", link: "#" },
            { name: "Body Loation", link: "#" },
            { name: "Cleansers", link: "#" },
            { name: "Cream", link: "#" },
            { name: "Eye Care", link: "#" },
            { name: "Face Wash", link: "#" },
            { name: "Gel", link: "#" },
            { name: "Lip Care", link: "#" },
            { name: "Mask", link: "#" },
            { name: "Pack", link: "#" },
            { name: "Scrub", link: "#" },
            { name: "Sun Protection", link: "#" }

        ]
    },
    {
        nathaircare: [
            { name: "Conditioner", link: "#" },
            { name: "Hair Oils", link: "#" },
            { name: "Hair Serum", link: "#" },
            { name: "Hair Gel", link: "#" },
            { name: "Hair Shampoo", link: "#" }

        ]
    }
]
let brands = [
    {
        brand_name: [
            { name: "LAKME", link: "#" },
            { name: "L-OREAL-PARIS", link: "#" },
            { name: "JOY", link: "#" },
            { name: "AROMA MAGIC", link: "#" },
            { name: "LOTUS HERBALS", link: "#" },
            { name: "BIOTIQUE", link: "#" },
            { name: "VLCC", link: "#" },
            { name: "VEGA", link: "#" },
            { name: "MAYBELLINE", link: "#" },
            { name: "MAMAEARTH", link: "#" },
            { name: "CHICCO", link: "#" },
            { name: "NEUTROGENA", link: "#" }
        ]
    }

]









displayNavbarContent()
function displayNavbarContent() {
    let face;

    let ey;


    let lipPro;

    let nailPro;

    let brushPro;

    // sidebarNavShow(face, ey, lipPro, nailPro, brushPro)

    for (let k = 0; k < arrObj.length; k++) {
        let g = arrObj[k]
        if (g.bbcream) {
            face = g.bbcream
        }

        if (g.eye) {
            ey = g.eye
        }
        if (g.lips) {
            lipPro = g.lips
        }
        if (g.nails) {
            nailPro = g.nails
        }
        if (g.toolbrushes) {
            brushPro = g.toolbrushes
        }

    }
    let skinMenu;
    let faceMenu;
    let bodyMenu;
    for (i = 0; i < skinarr.length; i++) {
        let ch = skinarr[i]
        if (ch.skincare) {
            skinMenu = ch.skincare
        }
        if (ch.facecare) {
            faceMenu = ch.facecare
        }
        if (ch.bodycare) {
            bodyMenu = ch.bodycare
        }
    }
    //haircare
    let hairc;
    let hairl;
    for (i = 0; i < hairarr.length; i++) {
        let ch = hairarr[i]
        if (ch.haircare) {
            hairc = ch.haircare
        }
        if (ch.hairloss) {
            hairl = ch.hairloss
        }

    }

    //personal care
    let bath;
    let bacc;
    let bshw;
    for (j = 0; j < personalCarearr.length; j++) {
        let chr = personalCarearr[j]
        if (chr.bodybath) {
            bath = chr.bodybath
        }
        if (chr.bathaccess) {
            bacc = chr.bathaccess
        }
        if (chr.bathshower) {
            bshw = chr.bathshower
        }


    }

    //mom and baby care
    let baby;
    let mom;

    for (j = 0; j < mom_baby_care_arr.length; j++) {
        let chr = mom_baby_care_arr[j]
        if (chr.babycare) {
            baby = chr.babycare
        }
        if (chr.momcare) {
            mom = chr.momcare



        }



    }

    //Ayurveda
    let nat_skin;
    let nat_hair;

    for (j = 0; j < ayurveda.length; j++) {
        let chr = ayurveda[j]
        if (chr.natskincare) {
            nat_skin = chr.natskincare
        }
        if (chr.nathaircare) {
            nat_hair = chr.nathaircare

        }
    }
    //brands
    let branding;


    for (j = 0; j < brands.length; j++) {
        let chr = brands[j]
        if (chr.brand_name) {
            branding = chr.brand_name
        }

    }




    document.querySelector("#face").append(createElementsUl(face))
    document.querySelector("#eye_care").append(createElementsUl(ey))
    document.querySelector("#lips").append(createElementsUl(lipPro))
    document.querySelector("#nails").append(createElementsUl(nailPro))
    document.querySelector("#brush").append(createElementsUl(brushPro))

    // this is skin tab in main navbar
    document.querySelector("#eyeCare").append(createElementsUl(skinMenu))
    document.querySelector("#faceCare").append(createElementsUl(faceMenu))
    document.querySelector("#bodyCare").append(createElementsUl(bodyMenu))

    //this is for hair tab in main navbar
    document.querySelector("#haircare").append(createElementsUl(hairc))
    document.querySelector("#hairloss").append(createElementsUl(hairl))
    // this is personal care tab in main navbar
    document.querySelector("#bodybth").append(createElementsUl(bath))
    document.querySelector("#bathAccess").append(createElementsUl(bacc))
    document.querySelector("#bathShower").append(createElementsUl(bshw))


    // this is mom and baby care tab in main navbar
    document.querySelector("#babyCare").append(createElementsUl(baby))
    document.querySelector("#momCare").append(createElementsUl(mom))

    // this is Ayurveda tab in main navbar
    document.querySelector("#natSkin").append(createElementsUl(nat_skin))
    document.querySelector("#natHair").append(createElementsUl(nat_hair))



    // this is brand tab in main navbar
    document.querySelector("#allBrands").append(createElementsUl(branding))

    //==================================================================
    //for another sidenav
    document.querySelector("#face1").append(createElementsUl(face))
    document.querySelector("#eye_care1").append(createElementsUl(ey))
    document.querySelector("#lips1").append(createElementsUl(lipPro))
    document.querySelector("#nails1").append(createElementsUl(nailPro))
    document.querySelector("#brush1").append(createElementsUl(brushPro))

    // this is skin tab in main navbar
    document.querySelector("#eyeCare1").append(createElementsUl(skinMenu))
    document.querySelector("#faceCare1").append(createElementsUl(faceMenu))
    document.querySelector("#bodyCare1").append(createElementsUl(bodyMenu))

    //this is for hair tab in main navbar
    document.querySelector("#haircare1").append(createElementsUl(hairc))
    document.querySelector("#hairloss").append(createElementsUl(hairl))
    // this is personal care tab in main navbar
    document.querySelector("#bodybth1").append(createElementsUl(bath))
    document.querySelector("#bathAccess1").append(createElementsUl(bacc))
    document.querySelector("#bathShower1").append(createElementsUl(bshw))


    // this is mom and baby care tab in main navbar
    document.querySelector("#babyCare1").append(createElementsUl(baby))
    document.querySelector("#momCare1").append(createElementsUl(mom))

    // this is Ayurveda tab in main navbar
    document.querySelector("#natSkin1").append(createElementsUl(nat_skin))
    document.querySelector("#natHair1").append(createElementsUl(nat_hair))



    // this is brand tab in main navbar
    document.querySelector("#allBrands1").append(createElementsUl(branding))



    //-------------------------------------=----------------------====---------------------------
    //this is for second navabar
    //----------------------------------------------------------------------------------------------
    document.querySelector("#face2").append(createElementsUl(face))
    document.querySelector("#eye_care2").append(createElementsUl(ey))
    document.querySelector("#lips2").append(createElementsUl(lipPro))
    document.querySelector("#nails2").append(createElementsUl(nailPro))
    document.querySelector("#brush2").append(createElementsUl(brushPro))

    // this is skin tab in main navbar
    document.querySelector("#eyeCare2").append(createElementsUl(skinMenu))
    document.querySelector("#faceCare2").append(createElementsUl(faceMenu))
    document.querySelector("#bodyCare2").append(createElementsUl(bodyMenu))

    //this is for hair tab in main navbar
    document.querySelector("#hairCare2").append(createElementsUl(hairc))
    document.querySelector("#hairLoss2").append(createElementsUl(hairl))
    // this is personal care tab in main navbar
    document.querySelector("#bodybth2").append(createElementsUl(bath))
    document.querySelector("#bathAccess2").append(createElementsUl(bacc))
    document.querySelector("#bathShower2").append(createElementsUl(bshw))


    // this is mom and baby care tab in main navbar
    document.querySelector("#babyCare2").append(createElementsUl(baby))
    document.querySelector("#momCare2").append(createElementsUl(mom))




}

function createElementsUl(h) {
    let ul = document.createElement("ul")
    for (let i = 0; i < h.length; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.setAttribute("href", h[i].link)
        a.innerText = h[i].name
        li.append(a)
        ul.append(li)

    }
    return ul
}

// function sidebarNavShow(face, ey, lipPro, nailPro, brushPro){
//     let sidearr = [face, ey, lipPro, nailPro, brushPro]
//     // console.log(face, ey, lipPro, nailPro, brushPro)
//     let appendTomakeup;
//     let child1 =  document.querySelector("#mySidebar>.dropdown-container")
//     for(let i=0;i<sidearr.length;i++){
//        let div = document.createElement("div")
//         appendTomakeup = div.append(createElementsUl(sidearr[i]))
//     appendTomakeup = div.append(createElementsUl(sidearr[i]))

//     }
//      child1.append(appendTomakeup)

// }
// sidebar js

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
let slidecount = 0
slideShow()
function slideShow() {
    let slide = document.querySelectorAll(".slide-img")

    let dot = document.querySelectorAll(".dot")
    for (let i = 0; i < slide.length; i++) {
        slide[i] = slide[i].style.display = "none"
    }
    slidecount++
    if (slidecount > slide.length) {
        slidecount = 1
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.
            replace(" active", "");
    }
    slide[slidecount - 1].style.display = "block";
    dot[slidecount - 1].className += " active";

    // Change image every 2 seconds
    setTimeout(slideShow, 5000);
}
