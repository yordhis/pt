import app from './app'

app.listen( app.get('port'), () => {
    console.log(`Servidor corriendo en: http://${app.get('host')}:${app.get('port')}`)
})
