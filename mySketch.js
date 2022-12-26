var song
var amp
var songIsplay=false
var mouseIsplay
var m_x
var m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var vol=0

function preload() {
	song = loadSound("Catch Me If I Fall - NEFFEX.mp3");
}
function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mouseIsplay = false
  amp=new p5.Amplitude()
}

function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false

}
function Speech_btn_pressed(){
  myRec.onResult = showResult;
	myRec.start();
	myRec.stop();
}

function showResult()
	{
		if(myRec.resultValue==true) {//顯示辨識文字
          push()
            translate(0,0)
			      background(192, 255, 192)
            fill(255,0,0)
            textStyle("italic")
            text(myRec.resultString,1200,10);
            text(myRec.resultString,0, height/2);
          pop()
          result = myRec.resultString
          if(myRec.resultString==="跳舞")
          {
            music_btn_pressed()
          }
          if(myRec.resultString==="不要跳")
          {
            mouse_btn_pressed()
            }
		}
	}

function setup() {
	createCanvas(windowWidth, windowHeight);
	music_btn = createButton("音樂播放")
 music_btn.position(10,10)
 music_btn.size(350, 100);
 music_btn.style('background-color', 'black');
 music_btn.style('font-size', '44px');
 music_btn.style('color', 'white');
 music_btn.mousePressed(music_btn_pressed)
	
	mouse_btn = createButton("音樂停止")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

	Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)
}

function draw() {
	background("#E6E6F2");
  //translate(width/2,height/2)//把0,0移到
	noStroke()
	//頭髮
	fill("#d4a373")
	quad(mouseX - 128, mouseY - 90, mouseX - 190, mouseY + 200, mouseX + 195, mouseY + 200, mouseX + 90, mouseY - 120)
	//人頭
	fill("#FFBD9D")
	ellipse(mouseX, mouseY, 312, 312)
	//左眼
	fill("#272727")
	ellipse(mouseX - 60, mouseY, 30, 40)
	//右眼
	fill("#272727")
	ellipse(mouseX + 60, mouseY, 30, 40)
	//嘴巴
	fill("#FF2D2D")
	fill(255, 0, 0)
	arc(mouseX + 10, mouseY + 50, 80, 100, 0, PI, CHORD)
	//左耳
	fill("#FFBD9D")
	ellipse(mouseX - 150, mouseY + 10, 50, 50)
	//右耳
	fill("#FFBD9D")
	ellipse(mouseX + 150, mouseY + 10, 50, 50)
	//瀏海
	fill("#d4a373")
	arc(mouseX, mouseY - 55, 295, 225, PI, TWO_PI, PIE)
	fill("#FFBD9D")
	triangle(mouseX - 48, mouseY - 120, mouseX - 58, mouseY - 20, mouseX + 86, mouseY + 75)
	
	translate(width/2,height/2)//把0,0移到
	vol = 0
	m_x =map(vol,0,1,0,width) 
  m_y =map(vol,0,1,0,height)
	if(songIsplay){
    vol = amp.getLevel()
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
		
  }
  else
  if(mouseIsplay)
  {
    m_x = mouseX
    m_y= mouseY
	}
	noStroke()
	//頭髮
	fill("#d4a373")
	quad(m_x - 128, m_y - 90, m_x - 190, m_y + 200, m_x + 195, m_y + 200, m_x + 90, m_y - 120)
	//人頭
	fill("#FFBD9D")
	ellipse(m_x, m_y, 312, 312)
	//左眼
	fill("#272727")
	ellipse(m_x - 60, m_y, 30, 40)
	//右眼
	fill("#272727")
	ellipse(m_x + 60, m_y, 30, 40)
	//嘴巴
	fill("#FF2D2D")
	arc(m_x+10, m_y+50, 80, 100, 0, PI, CHORD)
	//左耳
	fill("#FFBD9D")
	ellipse(m_x - 150, m_y + 10, 50, 50)
	//右耳
	fill("#FFBD9D")
	ellipse(m_x + 150, m_y + 10, 50, 50)
	//瀏海
	fill("#d4a373")
	arc(m_x, m_y-55, 295, 225, PI, TWO_PI, PIE)
	fill("#FFBD9D")
	triangle(m_x - 48, m_y - 120, m_x - 58, m_y - 20, m_x + 86, m_y + 75)
}
	
	
