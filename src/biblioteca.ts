interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  disponible: boolean;
}
class Libro {
  constructor(
    public id: number,
    public titulo: string,
    public autor: string,
    public categoria: string,
    public disponible: boolean
  ) {}
prestarlibro(usuarioId: number): boolean {      
    if (this.disponible) {
      this.disponible = false;
      return true;
    } else {
      return false;
    }
}
devolverlibro(): void {
    this.disponible = true;
  }

listarlibros(): void {
    console.log(`ID: ${this.id}, Título: ${this.titulo}, Autor: ${this.autor}, Categoría: ${this.categoria}, Disponible: ${this.disponible}`);
  }
buscarlibro(titulo: string): boolean {
    return this.titulo.toLowerCase() === titulo.toLowerCase();
  }

 }


interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
}

class Usuario {  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public telefono: string
  ) {}

registrarUsuario(): void {
    console.log(`Usuario registrado: ${this.nombre}, Correo: ${this.correo}, Teléfono: ${this.telefono}`);
  }
buscarUsuario(nombre: string): boolean {
    return this.nombre.toLowerCase() === nombre.toLowerCase();
  }
listarUsuarios(): void {    console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Correo: ${this.correo}, Teléfono: ${this.telefono}`);
  }
}

interface Prestamo {
  id: number;
  libroId: number;
  usuarioId: number;
  fechaPrestamo: Date;
  fechaDevolucion?: Date;
}

class Prestamo {  constructor(
    public id: number,
    public libroId: number,
    public usuarioId: number,
    public fechaPrestamo: Date,
    public fechaDevolucion?: Date
  ) {}
prestarLibro(): void {    console.log(`Libro prestado: Libro ID ${this.libroId}, Usuario ID ${this.usuarioId}, Fecha de préstamo: ${this.fechaPrestamo}`);
  }
devolverLibro(): void {    this.fechaDevolucion = new Date();
    console.log(`Libro devuelto: Libro ID ${this.libroId}, Usuario ID ${this.usuarioId}, Fecha de devolución: ${this.fechaDevolucion}`);
  }
listarPrestamos(): void {    console.log(`ID: ${this.id}, Libro ID: ${this.libroId}, Usuario ID: ${this.usuarioId}, Fecha de préstamo: ${this.fechaPrestamo}, Fecha de devolución: ${this.fechaDevolucion}`);
  }
}
interface Categoria {
  id: number;
  nombre: string;
  tipo: string;
  genero: string;
  descripcion: string;
}

class Categoria {  constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public genero: string,
    public descripcion: string
  ) {}

agregarCategoria(): void {    console.log(`Categoría agregada: ${this.nombre}, Tipo: ${this.tipo}, Género: ${this.genero}, Descripción: ${this.descripcion}`);
  }
eliminarCategoria(): void {    console.log(`Categoría eliminada: ${this.nombre}`);
  }
listarCategorias(): void {    console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Tipo: ${this.tipo}, Género: ${this.genero}, Descripción: ${this.descripcion}`);
  }
}
class Biblioteca {
  private libros: Libro[] = []  ;
  private usuarios: Usuario[] = [];
  private prestamos: Prestamo[] = [];
  private categorias: Categoria[] = [];
 }


