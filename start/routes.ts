/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MobiliariosController = () => import('#controllers/mobiliarios_controller')
import AperturaCajasController from '#controllers/apertura_cajas_controller'
import UserController from '#controllers/user_controller'
import ClientesController from '#controllers/clientes_controller'
import VendedoresController from '#controllers/vendedores_controller'
import InventarioController from '#controllers/inventarios_controller'
import PedidosController from '#controllers/pedidos_controller'
import DetallePedidoController from '#controllers/detalle_pedidos_controller'
import RutasController from '#controllers/rutas_controller'
import DetalleRutaController from '#controllers/detalle_rutas_controller'
import EmpresasController from '#controllers/empresas_controller'
import VentasController from '#controllers/ventas_controller'
import RangoPrecioController from '#controllers/rango_precio_productos_controller'
import DetalleVentasController from '#controllers/detalle_ventas_controller'
import PermisosController from '#controllers/permisos_controller'
import ModulosController from '#controllers/modulos_controller'
import ProveedoresController from '#controllers/proveedores_controller'
import BodegasController from '#controllers/bodegas_controller'
import router from '@adonisjs/core/services/router'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/', [MobiliariosController, 'index'])
  })
  .prefix('mobiliario')

router
  .group(() => {
    router.get('/', [AperturaCajasController, 'index'])
    router.post('/', [AperturaCajasController, 'store'])
    router.get('/:id', [AperturaCajasController, 'show'])
    router.put('/:id', [AperturaCajasController, 'updateAnulado'])
  })
  .prefix('apertura')

router
  .group(() => {

    router.get('/', [UserController, 'index'])
    router.post('/', [UserController, 'store'])
    router.get('/:id', [UserController, 'show'])
    router.put('/:id', [UserController, 'updateAnulado'])
  })
  .prefix('user')

router
  .group(() => {
    router.get('/', [ClientesController, 'index'])
    router.post('/', [ClientesController, 'store'])
    router.get('/:id', [ClientesController, 'show'])
    router.put('/:id', [ClientesController, 'updateInhabilitado'])
  })
  .prefix('cliente')

router
  .group(() => {
    router.get('/', [VendedoresController, 'index'])
    router.post('/', [VendedoresController, 'store'])
    router.get('/:id', [VendedoresController, 'show'])
    router.put('/:id', [VendedoresController, 'updateInhabilitado'])
  })
  .prefix('vendedor')

router
  .group(() => {

    router.get('/', [InventarioController, 'index'])
    router.post('/', [InventarioController, 'store'])
    router.get('/:id', [InventarioController, 'show'])
    router.put('/:id', [InventarioController, 'updateInhabilitado'])

  })
  .prefix('inventario')

router
  .group(() => {
    router.get('/', [PedidosController, 'index'])
    router.post('/', [PedidosController, 'store'])
    router.get('/:id', [PedidosController, 'show'])
    router.put('/:id', [PedidosController, 'updateAnulado'])
  })
  .prefix('pedidos')

router
  .group(() => {
    router.get('/', [DetallePedidoController, 'index'])
    router.post('/', [DetallePedidoController, 'store'])
    router.get('/:id', [DetallePedidoController, 'show'])
  })
  .prefix('detalle_pedidos')

  router
  .group(() => {
    router.get('/', [RutasController, 'index'])
    router.post('/', [RutasController, 'store'])
    router.get('/:id', [RutasController, 'show'])
    router.put('/:id', [RutasController, 'updateAnulado'])
  })
  .prefix('ruta')

  router
  .group(() => {
    router.get('/', [DetalleRutaController, 'index'])
    router.post('/', [DetalleRutaController, 'store'])
    router.get('/:id', [DetalleRutaController, 'show'])
  })
  .prefix('detalle_ruta')

router 
  .group(() => {
    router.get('/', [EmpresasController, 'index'])
    router.post('/', [EmpresasController, 'store'])
    router.get('/:id', [EmpresasController, 'show'])
  })
  .prefix('empresa')
  

router
  .group(() => {
    router.get('/', [VentasController, 'index'])
    router.post('/', [VentasController, 'store'])
    router.get('/:id', [VentasController, 'show'])
  })
  .prefix('venta')

router
  .group(() => {
    router.get('/', [RangoPrecioController, 'index'])
    router.post('/', [RangoPrecioController, 'store'])
    router.get('/:id', [RangoPrecioController, 'show'])
  })
  .prefix('rango_precio_producto')

router
  .group(() => {
    router.get('/', [DetalleVentasController, 'index'])
    router.post('/', [DetalleVentasController, 'store'])
    router.get('/:id', [DetalleVentasController, 'show'])
  })
  .prefix('detalle_venta')


  router
  .group(() => {
    router.get('/', [PermisosController, 'index'])
    router.post('/', [PermisosController, 'store'])
    router.get('/:id', [PermisosController, 'show'])
    router.post('/permisosModulo', [PermisosController, 'getPermisosByModulo'])

  })
  .prefix('permisos')
  
  router
  .group(() => {
    router.get('/', [ModulosController, 'index'])
    router.post('/', [ModulosController, 'store'])
    router.get('/:id', [ModulosController, 'show'])
  })
  .prefix('modulo')

  router
  .group(() => {
    router.get('/', [ProveedoresController, 'index'])
    router.post('/', [ProveedoresController, 'store'])
    router.get('/:id', [ProveedoresController, 'show'])
    router.put('/:id', [ProveedoresController, 'updateInHabilitado'])
  })
  .prefix('proveedor')


  router
  .group(() => {
    router.get('/', [BodegasController, 'index'])
    router.post('/', [BodegasController, 'store'])
    router.get('/:id', [BodegasController, 'show'])
  })
  .prefix('bodega')

  

