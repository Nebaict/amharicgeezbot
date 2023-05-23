function chatBot() {

    this.input;
    
    this.respondTo = function (input) {
  
      this.input = input.toLowerCase();
  
      if (this.match('(መኑ ይትበሃል ስምኪ)'))
         return " ስምየ ይትበሃል ስላም (ስም ሰላም ይባላል) ";
  
         if (this.match('(1)'))
         return "፩,ዐይን-->ማየት || ዐይን-->ርእይ  ";

         if (this.match('(2)'))
         return "፪,ጆሮ-->መስማት || እዝን-->ሰሚዐ  ";

         if (this.match('(3)'))
         return "፫አፍንጫ-->ማሽተት || አንፍ-->አዴንም";

         if (this.match('(4)'))
         return "፬,አፍ-->መቅመስ||አፍ-->ጥዲም";

         if (this.match('(5)'))
         return "፭,እጅ-->መዳሰስ||አድ-->ገሲስ";

         if (this.match('(6)'))
         return "፮,ሃበ-->ወደ";
         
         if (this.match('(7)'))
         return "፯,መንገለ-->ወደ";

         if (this.match('(8)'))
         return "፰,ሃቤሁ-->ወደሱ";

         if (this.match('(9)'))
         return "፱,ሃቤሃ-->ወደሶ";

         if (this.match('(10)'))
         return "፲,ሃቤሆሙ-->ወደነሱ";

         if (this.match('(11)'))
         return "፲፩,ሀይመነ-->አመነ";

         if (this.match('(12)'))
         return "፲፪,ሃዘነ-->አዘነ";

         if (this.match('(13)'))
         return "፲፫,ሃይደነ-->አበደ";
         
         if (this.match('(14)'))
         return "፲፬,መዝገነ-->አመሰገነ";

         if (this.match('(15)'))
         return "፲፭,ማሰነ-->ጠፋ";
               
         if (this.match('(ሰላም)'))
         return "እፎ አደርከ(እንዴት አደርከ)";

         if (this.match('(እግዛብሄር ይመስገን)'))
         return "ት/ት እንዴት ነው(ት/ት እፎ ውእቱ) ";

         if (this.match('(በጣም ጥሩ ነው)'))
         return "መልካም ቀን ወንድሜ በሰላም ያገናን(ሰናይ መዓልት እሁየ በሰላም ያስተራክበነ)!!!";
         
  
      
         

         

         
         
  
         if (this.match('(ምን ውእቱ ግብረ ትገብሪ)'))
         return "ግእዝ-አማርፍ ትርጉም (https://t.me/tnsaegeez)";
  
      return input + ", ምን?";
    };
  
    
    this.match = function (regex) {
  
      return new RegExp(regex).test(this.input);
    };
  }
  
  
  $(function () {
   
   
    var you = 'n';
    var robot = 'ቀሲስ';
  
   
    var delayStart = 400;
    var delayEnd = 800;
  
    
    var bot = new chatBot();
    var chat = $('.chat');
    var waiting = 0;
    $('.busy').text(robot + ' is typing...');
  
   
    var submitChat = function () {
  
      var input = $('.input input').val();
      if (input == '') return;
  
      $('.input input').val('');
      updateChat(you, input);
  
      var reply = bot.respondTo(input);
      if (reply == null) return;
  
      var latency = Math.floor(Math.random() * (delayEnd - delayStart) + delayStart);
      $('.busy').css('display', 'block');
      waiting++;
      setTimeout(function () {
        if (typeof reply === 'string') {
          updateChat(robot, reply);
        } else {
          for (var r in reply) {
            updateChat(robot, reply[r]);
          }
        }
        if (--waiting == 0) $('.busy').css('display', 'none');
      }, latency);
    };
  
    var updateChat = function (party, text) {
  
      var style = 'you';
      if (party != you) {
        style = 'other';
      }
  
      var line = $('<div><span class="party"></span> <span class="text"></span></div>');
      line.find('.party').addClass(style).text(party + ':');
      line.find('.text').text(text);
  
      chat.append(line);
  
      chat.stop().animate({ scrollTop: chat.prop("scrollHeight") });
  
    };
  
  
    $('.input').bind('keydown', function (e) {
      if (e.keyCode == 13) {
        submitChat();
      }
    });
    $('.input a').bind('click', submitChat);
  
  
    updateChat(robot, '1,2,3,4,5 የሰውነት  ዓካላት');
    updateChat(robot, '6,7,8,9,10,መስተዋድድ ');
    updateChat(robot, '11,12,13,14,15,ግስ  ');
    updateChat(robot, '"ሰላም" አውስዎትው ቃል ');
  
  });