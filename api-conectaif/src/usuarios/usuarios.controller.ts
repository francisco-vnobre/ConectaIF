import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
    @Get()
  async buscaUsuarios() {
      const user = 'teste';
      return {
        user,
        message: 'Administrador cadastrado com sucesso',
      };
    }
}
