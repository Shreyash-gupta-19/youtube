const wpStatusDetails = [
    {
      name: "Aarav Patel",
      uploadTime: "10:15 AM",
      profileImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://images.unsplash.com/photo-1733175697085-aa500b61ac74?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Kiara Mehta",
      uploadTime: "9:30 AM",
      profileImage: "https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://images.unsplash.com/photo-1734084192508-33bd2cd57f09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rahul Sharma",
      uploadTime: "11:00 AM",
      profileImage: "https://plus.unsplash.com/premium_photo-1734272643250-c076282c49f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/rahul-status.jpg"
    },
    {
      name: "Ananya Gupta",
      uploadTime: "8:45 AM",
      profileImage: "https://images.unsplash.com/photo-1704791403624-c192488ca4fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/ananya-status.jpg"
    },
    {
      name: "Kabir Malhotra",
      uploadTime: "12:00 PM",
      profileImage: "https://images.unsplash.com/photo-1734015169493-845b53c1cbc2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/kabir-status.jpg"
    },
    {
      name: "Ishita Roy",
      uploadTime: "7:15 AM",
      profileImage: "https://images.unsplash.com/photo-1702884161984-73580a533d03?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/ishita-status.jpg"
    },
    {
      name: "Arjun Verma",
      uploadTime: "6:30 AM",
      profileImage: "https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/arjun-status.jpg"
    },
    {
      name: "Sneha Kapoor",
      uploadTime: "9:00 AM",
      profileImage: "https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/sneha-status.jpg"
    },
    {
      name: "Vikram Sinha",
      uploadTime: "1:15 PM",
      profileImage: "https://plus.unsplash.com/premium_photo-1675881736049-e0cc020379d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/vikram-status.jpg"
    },
    {
      name: "Riya Deshmukh",
      uploadTime: "3:45 PM",
      profileImage: "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      statusImage: "https://example.com/status/riya-status.jpg"
    }
  ];

  var allstatus = document.querySelector(".allstatus")
var conctinent = ''

wpStatusDetails.forEach(function(elem, idx){
    conctinent += `<div class="status">
                <div id="${idx}" class="overlay"></div>
                <img src=${elem.profileImage}
                    alt="">
                <div class="detail">
                    <h2>${elem.name}</h2>
                    <h4>${elem.uploadTime}</h4>
                </div>
            </div>`

})
allstatus.innerHTML = conctinent

var fullStatus = document.querySelector('.underStatus')
var phone= document.querySelector('.frame')
var stimg = document.querySelector('#uS')
var picimg = document.querySelector('#uI')
var Na_me = document.querySelector('.underStatus .status .detail h2')
var Ti_me = document.querySelector('.underStatus .status .detail h4')
var loading = document.querySelector('.line .loading')

allstatus.addEventListener('click' , function(di_v){
    var Spic = wpStatusDetails[di_v.target.id].statusImage
    var Ppic = wpStatusDetails[di_v.target.id].profileImage
    var Name = wpStatusDetails[di_v.target.id].name
    var Time = wpStatusDetails[di_v.target.id].uploadTime
    
    fullStatus.style.display = 'block'
    phone.style.display = 'none'
    stimg.setAttribute('src', Spic)
    Na_me.innerHTML = Name
    Ti_me.innerHTML = Time
    picimg.setAttribute('src', Ppic)

    var w = 0


    var STnter =  setInterval(function(){
        loading.style.width = w + '%'
        w++;
    },70)

    setTimeout(function(){
        clearInterval(STnter);
        fullStatus.style.display = "none" 
        phone.style.display =  "block"
    },7000)
})

