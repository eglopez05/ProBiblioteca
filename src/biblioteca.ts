interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  disponible: boolean;
}

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
}

interface Prestamo {
  id: number;
  libroId: number;
  usuarioId: number;
  fechaPrestamo: Date;
  fechaDevolucion?: Date;
}

interface Categoria {
  id: number;
  nombre: string;
  tipo: string;
  genero: string;
  descripcion: string;
}
