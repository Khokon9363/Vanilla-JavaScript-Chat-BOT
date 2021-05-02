<?php

  if(isset($_POST['name'])){
      $to = "admin@gmail.com"; // write here your email address
      $subject = "This is test subject"; // write here the subject
      $message = "
                  <html>
                  <head>
                    <title>This is test title</title>
                  </head>
                  <body>
                    <p>Here is some data!</p>
                    <table>
                      <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Games</th>
                        <th>Producten</th>
                      </tr>
                      <tr>
                      "
                      . "<td>" . $_POST['name'] . "</td>" .
                      "<td>" . $_POST['gender'] . "</td>" .
                      "<td>" . $_POST['games'] . "</td>" .
                      "<td>" . $_POST['producten'] . "</td>" .
                      "
                      </tr>
                    </table>
                  </body>
                  </html>
                ";

      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
      $headers .= 'From: <user@gmail.com>' . "\r\n";
      $headers .= 'Cc: user@gmail.com' . "\r\n";

      mail($to,$subject,$message,$headers);
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanilla JavaScript Chat Bot</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"></script>
    <link href="https://scriptedconsultancy.com/css/materialize_tool.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="msger">
      <header class="msger-header">
        <div class="msger-header-title">
          <i class="fas fa-robot"></i>
          Vanilla JavaScript Chat Bot
        </div>
        <div class="msger-header-options" onclick="window.location.reload();">
          <span><i class="fas fa-sync-alt"></i></span>
        </div>
      </header>
      <main class="msger-chat">
        <div class="msg left-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/327/327779.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">BOT</div>
            </div>
            <div class="msg-text">Hi, What's your name ?</div>
          </div>
        </div>
        <div class="msg right-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/145/145867.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name"><span class="person-name"></span></div>
            </div>
            <div class="msg-text"><span class="person-name"></span></div>
          </div>
        </div>
        <div class="msg left-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/327/327779.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">BOT</div>
            </div>
            <div class="msg-text">
              Nice to meet you, <span class="person-name"></span> ! Pick your gender ! <br> <br>
              <button onclick="sendGender('Male');" class="btn mt-2 btn-sm btn-success">Male</button><br>
              <button onclick="sendGender('Female');" class="btn mt-2 btn-sm btn-success">Female</button><br>
              <button onclick="sendGender('Custom');" class="btn mt-2 btn-sm btn-success">Custom</button>
            </div>
          </div>
        </div>
        <div class="msg right-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/145/145867.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name"><span class="person-name"></span></div>
            </div>
            <div class="msg-text">My gender is <span id="gender"></span></div>
          </div>
        </div>
        <div class="msg left-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/327/327779.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">BOT</div>
            </div>
            <div class="msg-text">
              Nice to meet you, <span class="person-name"></span> ! Pick your favourite games ! <br> <br>
              <button onclick="selectGames(this, 'Game A');" class="btn mt-2 btn-sm btn-success">Game A</button><br>
              <button onclick="selectGames(this, 'Game B');" class="btn mt-2 btn-sm btn-success">Game B</button><br>
              <button onclick="selectGames(this, 'Game C');" class="btn mt-2 btn-sm btn-success">Game C</button><br>
              <button onclick="selectGames(this, 'Game D');" class="btn mt-2 btn-sm btn-success">Game D</button><br>
              <button onclick="sendGames()" class="btn mt-2 btn-sm btn-success" style="background-color: #97deef;">Submit</button>
            </div>
          </div>
        </div>
        <div class="msg right-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/145/145867.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name"><span class="person-name"></span></div>
            </div>
            <div class="msg-text">My favourate games are <span id="games"></span></div>
          </div>
        </div>
        <div class="msg left-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/327/327779.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">BOT</div>
            </div>
            <div class="msg-text">
              Drag the relevant products from the "Products" column to the appropriate time slot. 
              You can leave products that are not tied to a day in the column "Products". <hr/>
                <div class="row">
                  <div class="col s12 m12">
                    <h5> Geef aan wanneer activiteiten plaatsvinden.</h5>
                    <p> 
                      Sleep de relevante producten van de kolom "Producten" naar het juiste tijdvak. 
                      Producten die niet aan een dagmoment vast zitten laat u in de kolom "Producten".
                    </p>
                  </div>
                </div>
                <div class="row">
                    <div class="col s3 m3">
                      <h5 class="h6"><strong>Producten</strong></h5>
                      <div id="sortablelist" class="list-group mb-4 mt-3" data-id="1">
                        <div class="list-group-item d-flex align-items-center justify-content-between" data-id="2">
                          <div>
                            <p draggable="true" class="mb-0 d-inline-flex align-items-center">
                              List Item 1
                            </p>
                          </div>
                        </div>
                        <div class="list-group-item d-flex align-items-center justify-content-between" data-id="3">
                          <div>
                            <p draggable="true" class="mb-0 d-inline-flex align-items-center">
                              List Item 2
                            </p>
                          </div>
                        </div>
                        <div class="list-group-item d-flex align-items-center justify-content-between" data-id="4" style="">
                          <div>
                            <p draggable="true" class="mb-0 d-inline-flex align-items-center">
                              List Item 3
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col s3 m3">
                      <h5 class="h6"><strong>Ochtend</strong></h5>
                      <div id="sortablelist2" class="list-group mb-4 mt-3" data-id="1">
                      </div>
                    </div>
                    <div class="col s3 m3">
                      <h5 class="h6"><strong>Middag</strong></h5>
                      <div id="sortablelist3" class="list-group mb-4 mt-3" data-id="1">
                      </div>
                    </div>
                    <div class="col s3 m3">
                      <h5 class="h6"><strong>Avond</strong></h5>
                      <div id="sortablelist4" class="list-group mb-4 mt-3" data-id="1">
                      </div>
                    </div>
                    <div class="col s12 m12">
                      <p>Klik op "Doorgaan" als u klaar bent.</p>
                      <a onclick="sendItems()" class='btn blue'>Doorgaan</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="msg right-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/145/145867.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name"><span class="person-name"></span></div>
            </div>
            <div class="msg-text">
              I need those products - <br>
              Ochtend : <div id="OchtendItems"></div> <br>
              Middag : <div id="MiddagItems"></div> <br>
              Avond : <div id="AvondItems"></div> <br>
            </div>
          </div>
        </div>
        <div class="msg left-msg">
          <div class="msg-img" style="background-image: url('https://image.flaticon.com/icons/svg/327/327779.svg')"></div>
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">BOT</div>
            </div>
            <div class="msg-text">
              Thanks for your order ! <br>
              Stay with us !
            </div>
          </div>
        </div>
      </main>
      <form class="msger-inputarea" onsubmit="event.preventDefault(); sendName()">
        <input type="text" class="msger-input" placeholder="Enter your answer...">
        <button type="submit" class="msger-send-btn">Send</button>
      </form>
      <form id="data" method="post"">
        <input type="hidden" name="name" id="name_php">
        <input type="hidden" name="gender" id="gender_php">
        <input type="hidden" name="games" id="games_php">
        <input type="hidden" name="producten" id="producten_php">
      </form>
    </section>
    <script src="script.js"></script>
</body>
</html>