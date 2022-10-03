# Spotify User Info with Api
## Contenido
* [Descripción](#spotify-user-info-with-api)
* [Herramientas](#herramientas)
* [Instalación](#instalación)
* [Credenciales](#credenciales)
* [Configuración](#configuración)
* [Desplegar app](#desplegar-app)
* [Social Media](#social-media)

## Descripción
Esta práctica está realizada con el fín de aprender a obtener y manejar datos de una Api haciendo el uso del lenguaje **JavaScript**. Con respecto al diseño web pues es meramente **HTML** y **CSS** básico, bajo el apoyo del Framework [PicoCss](https://picocss.com/) para evitar estilar, ya que la parte que nos interesa es el manejo de datos de la Api de Spotify.

## Herramientas
Utilizadas en esta práctica:
* [Spotify Api](https://rapidapi.com/Glavier/api/spotify23/)
* [PicoCss](https://picocss.com/)
* [Netlify Drop](https://app.netlify.com/drop)

## Instalación
```
$ git clone https://github.com/EDUJOS/Spotify-User-Info.git
```
```
$ cd Spotify-User-Info
```

## Credenciales
Como el objetivo de ésta práctica no es crear una aplicación web con NodeJS, etc. Más bien trabajar meramente con JavaScript, entonces no trabajaremos directamente con la Api de Spotify sino que usarémos RapidAPI como mediador para hacer nuestras solicitudes a la Api de Spotify.
Para ello, en caso que no tengas una cuenta de RapidAPI debes crearte una, este hipervículo te llevará directamente a [RapidAPI](https://rapidapi.com/Glavier/api/spotify23/), en dónde realizarás los proceos correspondientes.

## Configuración
Una vez te hayas suscrito vas a copiar la Key-api que se te ha asignado y la vas a pegar en el header **"X-RapidAPI-Key"**.

![example](https://media.discordapp.net/attachments/824833209191104534/1000921413252816947/20220724_192333.png)

```
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'your-RapidAPI-key',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
```

## Desplegar App
Si quieres desplegar esta o cualquier otra app lo que tienes que hacer es subir la carpeta de la práctica a [Netlify](https://app.netlify.com/drop) y listo!
Ya tienes la app desplegada por 1 Hora!


***
# Social Media
Soy **Ed** y me gusta aprender a programar en mi tiempo libre.
Si gustas apoyarme dejando tu estrella en este repositorio o siguiendome en mis redes sociales! <3

- [Instagram](https://www.instagram.com/edujos_ph)
- [Twitter](https://twitter.com/edTkiere/)
- [Spotify](https://open.spotify.com/artist/4BAXv8m5faxr7ohru9Zbxh)


> Esta idea nació a partir de un video de [midudev](https://www.youtube.com/midudev)
