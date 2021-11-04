const app = Vue.createApp({
    data(){
        return{
            current: {},
            index: 0,
            isPlaying: false,
            playerCard: false,
            fav: false,
            time: 0,
            minutes: 0,
            seconds: 0,
            currTime: 0,
            currMins: 0,
            currSecs: 0,
            repeatBtn: false,
            random: false,
            favs: [],
            songs: [
                {
                    nadpis: 'Faded',
                    autor: 'Alan Walker',
                    src: 'Faded.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Faded2',
                    autor: 'Alan Walker',
                    src: 'Faded.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Faded3',
                    autor: 'Alan Walker',
                    src: 'Faded.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Faded4',
                    autor: 'Alan Walker',
                    src: 'Faded.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Faded5',
                    autor: 'Alan Walker',
                    src: 'Faded.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Hey brother',
                    autor: 'Idk',
                    src: 'stay.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Není co ztratit 2 ft. Daniel Vardan',
                    autor: 'Tafrob',
                    src: 'tafrobNeniCoZtratit.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Downnnnnnnnnnnn',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Down2',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Down3',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Down4',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Down5',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                {
                    nadpis: 'Falling Down6',
                    autor: 'Wid Cards',
                    src: 'fallingdown.mp3',
                    img:'pngegg.png'
                },
                
                

            ],
            player: new Audio()
        }
    },
    methods: {
        favSwap(){
            this.fav = !this.fav
        },
        favAdd(){
            this.favs.push(this.current)
            alert(this.current.nadpis + ' was Added!')
        },
        delay(){
            this.time = Math.round(this.player.duration)
            minutes = Math.floor(this.time/60)
            strMinute = minutes.toString()
            seconds = (this.time%60)
            strSecond = seconds.toString()
                minutes = strMinute.padStart(2, '0')
                seconds = strSecond.padStart(2,'0')
                this.time = minutes + ':' + seconds
          
        },
        track(){
            this.currTime= Math.round(this.player.currentTime)
            currMins = Math.floor(this.currTime/60)
            strMins = currMins.toString()
            currSecs = (this.currTime%60)
            strSecs = currSecs.toString()
                currMins = strMins.padStart(2, '0')
                currSecs = strSecs.padStart(2,'0')
                this.currTime = currMins + ':' + currSecs
        },
        
        play(song){
            if(typeof song.src != 'undefined'){
                this.current = song
                this.player.src = this.current.src
            }
           
            this.player.play()
            this.isPlaying = true
          
        },
        
        pause(){
            this.player.pause()
            this.isPlaying = false
        },
        next(){
            this.index++
            if(this.index > this.songs.length -1){
                this.index = 0
            }

            if(this.random === true){
                this.index = Math.round(Math.random() * this.songs.length)
            }
            this.current = this.songs[this.index]
            this.play(this.current)
        },
        prev(){
            this.index--
            if(this.index < 0){
                this.index = this.songs.length -1
            }
            if(this.random === true){
                this.index = Math.round(Math.random() * this.songs.length)
            }
            this.current = this.songs[this.index]
            this.play(this.current)

        },
        repeat(){
            this.repeatBtn = !this.repeatBtn
            console.log(this.repeatBtn)
        },
        ran(){
            this.random = !this.random
            console.log(this.random)
        },
        seekTo(){
           let seek_slider=document.querySelector('.seek_slider')
            let seekPosition = 0;
            seek_slider.value = 0
            if (!isNaN(this.player.duration)){
            seekPosition = 100*this.player.currentTime/this.player.duration;
            }
            seek_slider.value = seekPosition;
            seekPosition = seek_slider.value
            if(seekPosition == 100 && this.repeatBtn == false){
                this.next()
            } else if(seekPosition == 100 && this.repeatBtn == true){
                this.player.currentTime = 0
            }
        },
        changeTime(){
            if (!isNaN(this.player.duration)){
                this.seekPosition = 100*this.player.currentTime/this.player.duration;
                }     
           },
        swap(){
            this.playerCard = !this.playerCard
            this.isPlaying = !this.isPlaying
        }
    },
    created(){
        this.current = this.songs[this.index]
        this.player.src = this.current.src
    },
    mounted() {
        setInterval(() => {
            if(this.player) this.seekTo()
            if(this.player) this.delay()
            if(this.player) this.track()
        }, 100)
    },

})
app.mount('#app')