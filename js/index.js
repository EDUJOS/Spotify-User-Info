const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your APIKey here',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const fetchUser = id => {
  return fetch(`https://spotify23.p.rapidapi.com/user_profile/?id=${id}&playlistLimit=10&artistLimit=10`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}


const fetchPlaylist = id => {
  return fetch(`https://spotify23.p.rapidapi.com/playlist/?id=${id}`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $resinfo = $('#resinfo')
const $perfilimg = $('#perfilimg')
const $username = $('#username')
const $seguidores = $('#seguidores')
const $seguidos = $('#seguidos')
const $link = $('#link')
const $playlists = $('#playlists')
const $contplaylist = $('#contplaylist')
const $contfooter = $('#cont-footer')

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if(!value) return
  if(!value.startsWith('https://open.spotify.com/user')) return $input.setAttribute('aria-invalid', 'true')
  $input.removeAttribute('aria-invalid')
  $input.setAttribute('aria-invalid', 'false')

  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')

  let separada = value.split('/')[4]
  console.log(separada)
  let id = separada
  if(separada.includes('?')) id = separada.split('?')[0]

  const userinfo = await fetchUser(id)
  console.log(userinfo)
  let followers = userinfo.followers_count
  let following = userinfo.following_count
  let list = userinfo.total_public_playlists_count
  let userPlaylist = userinfo.public_playlists === undefined ? 0 : userinfo.public_playlists.slice(0, 4)
  let playlistUri = ''
  let playlistId = ''
  let playlistData = ''
  let frontPlaylistData = ''
  let tracks = ''
  let followers_count = ''
  let playlistUrl = ``
  if(followers === undefined) followers = 0
  if(following === undefined) following = 0
  if(list === undefined) {
    list = 0
  } else {
    console.log(userPlaylist)
    userPlaylist.forEach(async playlist => {
      playlistUri = playlist.uri.split(':')[2]
      console.log(playlistUri)
      playlistId = playlistUri
      playlistUrl = `https://open.spotify.com/playlist/${playlistId}`
      const Data = await fetchPlaylist(playlistId)
      playlistData = Data
      tracks = Data.tracks.items.length
      followers_count = Object.values(Data.followers)
      if(playlistData) {
        console.log(playlistData)
          frontPlaylistData += `
          <div class="card">
          <div class="card-img">
          <a class="play" target="_blank" href="${playlistUrl}">
            <img id="playimg" src="${playlistData.images[0].url}">
          </a>
            </div>
            <div class="card-info">
            <p id="title">${playlistData.name}</p>
            <p id="songsCount">Songs: ${tracks}</p>
            <p id="followers">Followers: ${followers_count}</p>
            <a class="play" target="_blank" href="${playlistUrl}"></a>
          </div>
          </div>
          `
          // console.log(frontPlaylistData)
        if(userinfo){
          $perfilimg.setAttribute('src', userinfo.image_url)
          $username.innerHTML = userinfo.name
          $seguidores.innerHTML = `${followers} Seguidores`
          $seguidos.innerHTML = `Sigue a ${following} usuarios`
          $playlists.innerHTML = `${list} playlist públicas`
          $link.setAttribute('href', `https://open.spotify.com/user/${id}`)
          $contplaylist.innerHTML = frontPlaylistData;
          // $contfooter.innerHTML = frontFooter;
          $contfooter.style.display = 'flex';
        }
      }
    })
  }
  
  $resinfo.style.display = 'flex'
  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})