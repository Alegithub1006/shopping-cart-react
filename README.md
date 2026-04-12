# 📌 **1. Tareas del proyecto (Roadmap completo y ordenado)**

## 🧱 Arquitectura y base del proyecto

- ✅ Crear estructura modular: `components/`, `pages/`, `context/`, `reducers/`, `hooks/`, `services/`.
- ✅ Crear servicio de API:
  ✅ - `getProducts()`
  ✅ - `getProductById(id)`
- ✅ Crear manejo de estados de carga y error.

## 🛒 Carrito con Context + Reducer

- ✅ Crear `CartContext` y `CartProvider`.
  -✅ Crear `cartReducer` con acciones:
  -✅ ADD_TO_CART
  -✅ REMOVE_FROM_CART
  -✅ UPDATE_QUANTITY
  -✅ CLEAR_CART
  -✅ Crear selectores:
  -✅ totalItems
  -✅ totalPrice
  -✅ Persistir carrito en `localStorage`.

## 🧭 Navegación con React Router

- Crear rutas:
  - ✅ `/` → Lista de productos
  - ✅ `/product/:id` → Detalle
  - ✅ `/cart` → Carrito
  - ✅ `*` → NotFound
- Implementar navegación desde cards y botones.

## 🖼️ Componentes UI

- ✅ ProductCard (imagen, título, precio, rating, botón agregar).
- ✅ ProductDetail (descripción, stock, reviews, dimensiones, shipping).
- ✅ CartItem (cantidad editable, subtotal).
- ✅ Navbar con contador del carrito.
- ✅ Filters (categoría, precio, rating, marca).
- Loader y ErrorMessage.

## 🔍 Funcionalidades adicionales

- ✅ Filtros combinados (categoría + precio + rating).
- ✅ Buscador por texto.
- ✅ Ordenar por precio, rating o nombre.
- Paginación o infinite scroll.
- Mostrar reviews con fecha formateada.
- Mostrar dimensiones y shipping info.
- Mostrar productos relacionados por categoría.

## ⚡ Optimización

- Memoizar cálculos del carrito.
- ✅ Memoizar listas filtradas.
- Lazy loading de páginas.
- Suspense para carga diferida.
- Evitar renders innecesarios en ProductCard.

## 💾 Persistencia

- ✅ Guardar carrito en localStorage.
- ✅Guardar filtros en sessionStorage.
- Restaurar estado al recargar.

## 🧪 Testing unitario (opcional)

- Reducer del carrito.
- ProductCard.
- ProductDetail.
- Selectores del carrito.

---

# 🧪 **2. Lista de pruebas E2E con Playwright (Checklist profesional)**

## 🟢 Pruebas básicas (funcionalidad principal)

- Cargar la lista de productos y verificar que aparecen.
- Abrir un producto desde la lista.
- Ver detalle del producto.
- Agregar producto al carrito desde la lista.
- Agregar producto al carrito desde el detalle.
- Verificar que el contador del carrito aumenta.
- Abrir el carrito y confirmar que el producto está.
- Cambiar cantidad del producto.
- Eliminar producto del carrito.
- Vaciar carrito.

## 🟡 Pruebas intermedias (flujo completo)

- Filtrar productos por categoría.
- Buscar productos por texto.
- Ordenar productos.
- Navegar entre páginas y mantener el carrito.
- Recargar la página y verificar persistencia del carrito.
- Flujo de checkout:
  - Ir al carrito → checkout → mensaje de éxito.

## 🔵 Pruebas avanzadas (edge cases + UX)

- Intentar agregar producto sin stock (si lo simulas).
- Verificar que el botón “Agregar” se deshabilita si stock = 0.
- Navegar a `/product/9999` y ver NotFound.
- Abrir `/product/:id` directamente desde URL.
- Verificar cálculos del carrito:
  - Totales
  - Subtotales
  - Cantidades
- Verificar carga correcta de imágenes.
- Verificar que los reviews se muestran.

## 🔥 Pruebas expert (performance + regresión)

- Renderizar 100–500 productos y medir tiempo.
- Agregar productos repetidamente y medir respuesta.
- Verificar que el reducer no duplica productos.
- Verificar que el estado global no se resetea al navegar.

---

//npx -y react-doctor@latest .
