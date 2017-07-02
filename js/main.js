var userArrary = [
  
  {
    name: 'Yan Hong',
    age: 26,
    school: 'SFU',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Neo Wang',
    age: 26,
    school: 'UBC',
    skills: ['Python', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Ben Sun',
    age: 30,
    school: 'SFU',
    skills: ['Logo Design', 'VI', 'UIUX', 'Branding'],
    isPublic: false
  },

];

// for (var i = 0; i < userArrary.length; i++) {
//   console.log(userArrary[i].name)
//   $('#user-container').append('<h1>' + userArrary[i].name + '</h1>')
// }

  
   // var userContainer = $('<div>').addClass('user')




   // $('<h1>').text(userArrary[i].name).appendTo(userContainer)
   // $('<h2>').text(userArrary[i].age).appendTo(userContainer)
   // $('<h2>').text(userArrary[i].school).appendTo(userContainer)
  
     // for(var j = 0; j < userObject.skills.length; j++) {
     //   $('<span>').text(userObject.skills[j]).appendTo(userSkills)
     // }

    // if(userObject.name === $('.search-input').val()) {





   


$('.search-btn').click(function() {
  $('user-container').html("")

  for (var i = 0; i < userArrary.length; i++) {
    
    var userObject = userArrary[i]

    if (userObject.name === $('.search-input').val()) {
      var userContainer = $('<div>').addClass('user')  
      var appendEle = function(tag, value) {
        
         $(tag).text(value).appendTo(userContainer)
      }

      appendEle('<h1>', userObject.name)
      appendEle('<h2>', userObject.age)
      appendEle('<h2>', userObject.school)

      var userSkills = $('<p>')
        for(var j = 0; j < userObject.skills.length; j++) {
          $('<span>').text(userObject.skills[j]).appendTo(userSkills)
     }

      $(userSkills).appendTo(userContainer)
      $('#user-container').append(userContainer)
 }


}})

