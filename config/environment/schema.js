module.exports =  {
  env: {
    doc: "El entorno de la aplicación.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "El puerto para usar",
    format: "port",
    default: 4000,
    env: "PORT"
  },
  youtubeV3: {
    apiKey: {
      doc: "La clave api de youtube",
      format: String,
      default: 'falsa_api_key',
      env: "YOUTUBE_API_KEY"
    },
    channelId: {
      doc: "El id del canal de youtibe",
      format: String,
      default: 'falso_canal_id',
      env: "CHANNEL_ID"
    }
  }
}
