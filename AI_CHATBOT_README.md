# AI Chatbot - Configuración

## 🤖 Descripción

Chatbot inteligente potenciado por GPT-4 de OpenAI, entrenado específicamente para responder preguntas sobre PouchNATION y sus soluciones.

## 📋 Requisitos

1. **API Key de OpenAI**
   - Crea una cuenta en [OpenAI Platform](https://platform.openai.com/)
   - Genera una API key en [API Keys](https://platform.openai.com/api-keys)
   - Asegúrate de tener créditos disponibles

## ⚙️ Configuración

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
```

### 2. Reiniciar el Servidor

Después de agregar la variable de entorno:

```bash
npm run dev
```

## 💡 Características

- ✅ Respuestas en español
- ✅ Conocimiento completo sobre PouchVenues, PouchEvents y PouchConnect
- ✅ Interfaz moderna y responsive
- ✅ Indicador de escritura en tiempo real
- ✅ Historial de conversación
- ✅ Modo oscuro/claro automático

## 📊 Conocimiento del Bot

El chatbot está entrenado con información sobre:

### PouchVenues
- Tipos de venues (hoteles, beach clubs, nightclubs, etc.)
- Características y beneficios
- Tecnología NFC/RFID

### PouchEvents
- Tipos de eventos (festivales, conciertos, conferencias, etc.)
- Ticketing y control de acceso
- Pagos sin efectivo

### PouchConnect
- APIs disponibles (Bookings, Accounting, Payments)
- Documentación técnica
- Integraciones

## 💰 Costos Estimados

- **Modelo:** GPT-4
- **Costo aproximado:** $0.03 por 1K tokens (input) + $0.06 por 1K tokens (output)
- **Promedio por conversación:** $0.05 - $0.15
- **Mensual (100 conversaciones/día):** ~$150-450

## 🔒 Seguridad

- La API key nunca se expone al cliente
- Todas las llamadas se hacen desde el servidor (API Route)
- Rate limiting recomendado para producción

## 🚀 Próximas Mejoras

- [ ] Historial de conversaciones persistente
- [ ] Integración con CRM
- [ ] Analytics de conversaciones
- [ ] Respuestas sugeridas
- [ ] Soporte multiidioma (inglés/español)
- [ ] Integración con WhatsApp

## 📝 Notas

- El chatbot aparece en todas las páginas del sitio
- Se puede cerrar y abrir con el botón flotante
- Las conversaciones no se guardan entre sesiones (por ahora)
