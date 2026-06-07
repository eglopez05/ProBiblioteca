interface ILibro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  disponible: boolean;
}

interface IUsuario {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
}

interface IPrestamo {
  id: number;
  libroId: number;
  usuarioId: number;
  fechaPrestamo: Date;
  fechaDevolucion?: Date;
}

interface ICategoria {
  id: number;
  nombre: string;
  tipo: string;
  genero: string;
  descripcion: string;
}

class Libro implements ILibro {
  constructor(
    public id: number,
    public titulo: string,
    public autor: string,
    public categoria: string,
    public disponible: boolean = true
  ) {}

  prestarLibro(): boolean {
    if (this.disponible) {
      this.disponible = false;
      return true;
    }
    return false;
  }

  devolverLibro(): void {
    this.disponible = true;
  }

  mostrarInfo(): void {
    console.log(`
Libro:
ID: ${this.id}
Título: ${this.titulo}
Autor: ${this.autor}
Categoría: ${this.categoria}
Disponible: ${this.disponible ? "Sí" : "No"}
`);
  }
}


class Usuario implements IUsuario {
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public telefono: string
  ) {}

  mostrarInfo(): void {
    console.log(`
Usuario:
ID: ${this.id}
Nombre: ${this.nombre}
Correo: ${this.correo}
Teléfono: ${this.telefono}
`);
  }
}



class Categoria implements ICategoria {
  constructor(
    public id: number,
    public nombre: string,
    public tipo: string,
    public genero: string,
    public descripcion: string
  ) {}

  mostrarInfo(): void {
    console.log(`
Categoría:
ID: ${this.id}
Nombre: ${this.nombre}
Tipo: ${this.tipo}
Género: ${this.genero}
Descripción: ${this.descripcion}
`);
  }
}


class Prestamo implements IPrestamo {
  public fechaDevolucion?: Date;

  constructor(
    public id: number,
    public libroId: number,
    public usuarioId: number,
    public fechaPrestamo: Date
  ) {}

  registrarDevolucion(): void {
    this.fechaDevolucion = new Date();
  }

  mostrarInfo(): void {
    console.log(`
Préstamo:
ID: ${this.id}
Libro ID: ${this.libroId}
Usuario ID: ${this.usuarioId}
Fecha Préstamo: ${this.fechaPrestamo}
Fecha Devolución: ${
      this.fechaDevolucion
        ? this.fechaDevolucion.toLocaleDateString()
        : "Pendiente"
    }
`);
  }
}


class Biblioteca {
  private libros: Libro[] = [];
  private usuarios: Usuario[] = [];
  private categorias: Categoria[] = [];
  private prestamos: Prestamo[] = [];

  agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }

  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  agregarCategoria(categoria: Categoria): void {
    this.categorias.push(categoria);
  }

  listarLibros(): void {
    console.log("\n===== LIBROS =====");
    this.libros.forEach(libro => libro.mostrarInfo());
  }

  listarUsuarios(): void {
    console.log("\n===== USUARIOS =====");
    this.usuarios.forEach(usuario => usuario.mostrarInfo());
  }

  prestarLibro(
    libroId: number,
    usuarioId: number
  ): void {
    const libro = this.libros.find(l => l.id === libroId);

    if (!libro) {
      console.log("Libro no encontrado.");
      return;
    }

    if (libro.prestarLibro()) {
      const prestamo = new Prestamo(
        this.prestamos.length + 1,
        libroId,
        usuarioId,
        new Date()
      );

      this.prestamos.push(prestamo);

      console.log(
        `Libro "${libro.titulo}" prestado correctamente.`
      );
    } else {
      console.log("El libro no está disponible.");
    }
  }

  devolverLibro(libroId: number): void {
    const libro = this.libros.find(l => l.id === libroId);

    if (!libro) {
      console.log("Libro no encontrado.");
      return;
    }

    libro.devolverLibro();

    const prestamo = [...this.prestamos]
      .reverse()
      .find(
        p =>
          p.libroId === libroId &&
          p.fechaDevolucion === undefined
      );

    if (prestamo) {
      prestamo.registrarDevolucion();
    }

    console.log(
      `Libro "${libro.titulo}" devuelto correctamente.`
    );
  }

  listarPrestamos(): void {
    console.log("\n===== PRÉSTAMOS =====");
    this.prestamos.forEach(prestamo =>
      prestamo.mostrarInfo()
    );
  }
}
console.log("=== SISTEMA DE BIBLIOTECA ===");

const biblioteca = new Biblioteca();

const categoria1 = new Categoria(
  1,
  "Novela",
  "Ficción",
  "Literatura",
  "Narraciones extensas"
);

biblioteca.agregarCategoria(categoria1);
const libro1 = new Libro(
  1,
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  "Novela"
);

const libro2 = new Libro(
  2,
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  "Novela"
);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

const usuario1 = new Usuario(
  1,
  "Juan Pérez",
  "juan@gmail.com",
  "0999999999"
);

const usuario2 = new Usuario(
  2,
  "María Gómez",
  "maria@gmail.com",
  "0988888888"
);

biblioteca.agregarUsuario(usuario1);
biblioteca.agregarUsuario(usuario2);

biblioteca.listarLibros();
biblioteca.listarUsuarios();
biblioteca.prestarLibro(1, 1);
biblioteca.listarPrestamos();
biblioteca.devolverLibro(1);
biblioteca.listarPrestamos();