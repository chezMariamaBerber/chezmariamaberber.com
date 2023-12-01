                  

                  var name = document.getelementById('name').value;
                  var email = document.getelementById('email').value;
                  var phone = document.getelementById('phone').value;
                  var date = document.getelementById('date').value;
                  var time = document.getelementById('time').value;
                  var people = document.getelementById('people').value;
                  var message = document.getelementById('message').value;
                  var composition = " Name :" + name + "<br>Phone : " + phone + "<br>Date : " + date + "<br>Time :" + time
                   + "<br> Number of Poeple : " + people + "<br>Message: <br>" + message; 

                      function emailSend(){
                            Email.send({
                          Host : "smtp.elasticemail.com",
                          Username : "chezmariamaberber@gmail.com",
                          Password : "08F1130C187BF6CA2D9FFE04A2855ED61C2C",
                          To : 'chezmariamaberber@gmail.com',
                          From : document.getelementById('email').value,
                          Subject : "New Reservation Mariama",
                          Body : composition;
                        }).then(
                        message => alert(message)
                      );
                  }



                  