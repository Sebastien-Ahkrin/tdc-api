import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import Env from '#start/env'

export default class BotAuthenticationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const key = ctx.request.header('Bot-Key')

    if (!key || key !== Env.get('BOT_ID_EXECUTER')) {
      return ctx.response.status(401).json({ message: 'Bot key cannot be verified' })
    }

    await next()
  }
}
