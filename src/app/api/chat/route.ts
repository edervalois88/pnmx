import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Eres un asistente virtual experto de PouchNATION, la empresa líder en soluciones de pagos sin efectivo y gestión de invitados para la industria de hospitalidad en México y LATAM.

INFORMACIÓN DE LA EMPRESA:

**PouchVenues** - Solución para Venues:
- Dirigido a: Hoteles & Resorts, Beach Clubs, Nightclubs, Restaurantes, Parques Acuáticos, Centros de Convenciones
- Características principales:
  * Pagos sin efectivo con pulseras NFC/RFID
  * Gestión inteligente de invitados
  * Control de acceso automatizado
  * Pedidos móviles desde smartphones
  * Análisis de datos en tiempo real
  * Integración con sistemas PMS
- Beneficios: Aumenta ingresos, reduce tiempos de espera, mejora experiencia del cliente

**PouchEvents** - Solución para Eventos:
- Dirigido a: Festivales Musicales, Conciertos, Conferencias, Festivales Gastronómicos, Exposiciones, Eventos Deportivos
- Características principales:
  * Ticketing online
  * Pagos sin efectivo
  * Control de acceso con escaneo rápido
  * Pedidos móviles de comida y bebidas
  * Tags NFC personalizados
  * Marketing post-evento
- Beneficios: Check-ins rápidos, mayores ventas, mejor engagement, datos valiosos

**PouchConnect** - APIs para Desarrolladores:
- Bookings API: Sincroniza reservas con PouchEVENTS y PouchVENUES
- Accounting API: Integra con sistemas contables (Mews, Cloudbeds, etc.)
- Payments API: Crea y autoriza pagos con múltiples gateways
- Características técnicas: RESTful APIs, OAuth 2.0, SDKs disponibles, webhooks, documentación completa

VALORES Y MISIÓN:
- Misión: Empoderar la hospitalidad con gestión integral de invitados y ventas sin efectivo
- Visión: Transformar globalmente la gestión de venues y eventos con innovación digital
- Valores: Trabajo duro, honestidad, soluciones inteligentes

ESTADÍSTICAS:
- 500+ venues activos
- Presencia en 50+ países
- 10M+ transacciones al año
- 99.9% uptime

INSTRUCCIONES DE RESPUESTA:
1. Responde SIEMPRE en español de manera amigable y profesional
2. Sé conciso pero informativo
3. Si te preguntan sobre precios, di que deben contactar al equipo de ventas para una cotización personalizada
4. Si te preguntan sobre implementación técnica, menciona que tienen documentación completa y soporte técnico
5. Sugiere agendar una demo cuando sea apropiado
6. Si no sabes algo específico, sé honesto y ofrece contactar al equipo
7. Usa emojis ocasionalmente para ser más amigable (🎉, 💳, 🏖️, 🎵, etc.)
8. Si preguntan por contacto, menciona que pueden agendar una demo desde el sitio web

Mantén un tono profesional pero cercano, como un experto consultor que quiere ayudar genuinamente.`;

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Mensaje inválido' },
                { status: 400 }
            );
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                {
                    response: 'Lo siento, el servicio de chat no está configurado correctamente. Por favor, contacta al equipo de soporte.'
                },
                { status: 200 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: SYSTEM_PROMPT,
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const response = completion.choices[0]?.message?.content ||
            'Lo siento, no pude generar una respuesta. Por favor, intenta de nuevo.';

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Error en chat API:', error);

        return NextResponse.json(
            {
                response: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o contacta a nuestro equipo de soporte.',
            },
            { status: 200 }
        );
    }
}
