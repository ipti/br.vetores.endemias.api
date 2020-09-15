'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world Vetores-Endemias-API JSON. CLIC Agente App' }
})

// Rota para autenticação *POST /sessions
Route.post('/sessions', 'SessionController.create')

Route.group(
    () => {
        // *GET /agente         *POST /agente         *GET /agente/:id          *PUT /agente/:id          *DELETE /agente/:id
        Route.resource('agente', 'AgenteController').apiOnly()

        // *GET /atividade      *POST /atividade      *GET /atividade/:id       *PUT /atividade/:id       *DELETE /atividade/:id
        Route.resource('atividade', 'AtividadeDoDiaController').apiOnly()

        // *GET /visita/tipo    *POST /visita/tipo    *GET /visita/tipo/:id     *PUT /visita/tipo/:id     *DELETE /visita/tipo/:id
        Route.resource('visita/tipo', 'VisitaTipoController').apiOnly()

        // *GET /visita/status  *POST /visita/status  *GET /visita/status/:id   *PUT /visita/status/:id   *DELETE /visita/status/:id
        Route.resource('visita/status', 'VisitaStatusController').apiOnly()

        // *GET /imovel/tipos   *POST /imovel/tipos   *GET /imovel/tipos/:id    *PUT /imovel/tipos/:id    *DELETE /imovel/tipos/:id
        Route.resource('imovel/tipos', 'ImovelTipoController').apiOnly()

        // *GET /regioes        *POST /regioes        *GET /regioes/:id         *PUT /regioes/:id         *DELETE /regioes/:id
        Route.resource('regioes', 'RegiaoController').apiOnly()
        
        // *GET /localidades    *POST /localidades    *GET /localidades/:id     *PUT /localidades/:id     *DELETE /localidades/:id
        Route.resource('localidades', 'LocalidadeController').apiOnly()

        // *GET /municipios        *POST /municipios        *GET /municipios/:id         *PUT /municipios/:id         *DELETE /municipios/:id
        Route.resource('municipios', 'MunicipioController').apiOnly()
    }
)