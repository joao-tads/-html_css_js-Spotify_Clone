var audioPlay = document.querySelector('#audioPlayer')
var loaded = false
var playBtn = document.querySelector('#playBtn')
var pauseBtn = document.querySelector('#pauseBtn')

pauseBtn.addEventListener('click', e => {
  e.preventDefault()
  playBtn.style.display = 'inline'
  pauseBtn.style.display = 'none'
  audioPlay.pause()
  return false
})

playBtn.addEventListener('click', e => {
  e.preventDefault()
  playBtn.style.display = 'none'
  pauseBtn.style.display = 'inline'
  audioPlay.play()
  return false
})

const playSong = file => {
  if (loaded == false) {
    audioPlay.innerHTML = `<source src="` + file + `" type="audio/mp3" />`
    loaded = true
  }

  audioPlay.play()
  playBtn.style.display = 'none'
  pauseBtn.style.display = 'inline'
}

document.querySelectorAll('.main_col').forEach(item => {
  item.addEventListener('click', event => {
    let image = item.getAttribute('data-image')
    let artist = item.getAttribute('data-artist')
    let song = item.getAttribute('data-song')
    let file = item.getAttribute('data-file')

    let playArtistComponent = document.getElementsByClassName('player_artist')

    playArtistComponent[0].innerHTML =
      `
      <img src="` +
      image +
      `" />
      <h3>` +
      song +
      `<br><span>` +
      artist +
      `</span></h3>
    `

    playSong(file)
  })
})
