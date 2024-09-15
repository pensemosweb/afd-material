function fnAInvocarDespuesDe2segundos() {
  console.log("Hola mundo");
}
//setTimeout(fnAInvocarDespuesDe2segundos, 5000);

//function setTimeout(fn, tiempo) {}

setTimeout(function abulea() {
  let contador = 0;
  console.log(contador);
  setTimeout(function madre() {
    contador = contador + 1;
    console.log(contador);
    setTimeout(function hija() {
      fetch("https://cat-fact.herokuapp.com/facts").then(function (response) {
        console.log(response);
        console.log(contador);
      });

      setTimeout(function nieta() {
        console.log("nieta");
        setTimeout(function bisnieta() {
          console.log("bisnieta");
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);

function abuela() {
  const nombreAbuela = "Martina";
  console.log("abuela");
  function madre() {
    const nombreMadre = "Ruperta";
    console.log("madre");

    function hija() {
      const nombreHija = "Pepita";
      console.log("hija");

      console.log(nombreAbuela);
      console.log(nombreMadre);
    }

    hija();
  }

  madre();
}

abuela();

function login() {
  const user = getUser("id", function (user) {
    const roles = getRoles(user, function (permisos) {
      const permisos = getPermisos(roles, function (permisos) {
        const vistas = getVistas(permisos, function (vistas) {
          pintarDashboard(vistas);
          const posts = getPosts(vistas, function (posts) {
            vistas.home.posts = pintarPosts(posts);
            const comentarios = getComentarios(posts, function (comentarios) {
              vistas.home.posts.comentarios = pintarComentarios(comentarios);
              const usuarios = getUsuarios(comentarios, function (usuarios) {
                vistas.home.posts.comentarios.usuarios =
                  pintarUsuarios(usuarios);
                const fotos = getFotos(usuarios, function (fotos) {
                  vistas.home.posts.comentarios.usuarios.fotos =
                    pintarFotos(fotos);
                  const videos = getVideos(fotos, function (videos) {
                    vistas.home.posts.comentarios.usuarios.fotos.videos =
                      pintarVideos(videos);
                    const audios = getAudios(videos, function (audios) {
                      vistas.home.posts.comentarios.usuarios.fotos.videos.audios =
                        pintarAudios(audios);
                      const archivos = getArchivos(audios, function (archivos) {
                        vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos =
                          pintarArchivos(archivos);
                        const pdfs = getPdfs(archivos, function (pdfs) {
                          vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos.pdfs =
                            pintarPdfs(pdfs);
                          const mp3s = getMp3s(pdfs, function (mp3s) {
                            vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos.pdfs.mp3s =
                              pintarMp3s(mp3s);
                            const mp4s = getMp4s(mp3s, function (mp4s) {
                              vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos.pdfs.mp3s.mp4s =
                                pintarMp4s(mp4s);
                              const jpgs = getJpgs(mp4s, function (jpgs) {
                                vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos.pdfs.mp3s.mp4s.jpgs =
                                  pintarJpgs(jpgs);
                                const pngs = getPngs(jpgs, function (pngs) {
                                  vistas.home.posts.comentarios.usuarios.fotos.videos.audios.archivos.pdfs.mp3s.mp4s.jpgs.pngs =
                                    pintarPngs(pngs);
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function login(id) {
  getUser(id)
    .then(function (user) {
      return getRoles(user);
    })
    .then(function (roles) {
      return getPermisos(roles);
    })
    .catch(function (error) {
      alert("Hubo un error");
    })
    .then(function (permisos) {
      return getVistas(permisos);
    })
    .then(function (vistas) {
      pintarDashboard(vistas);
      return getPosts(vistas);
    })
    .then(function (posts) {
      pintarPosts(posts);
      return getComentarios(posts);
    })
    .then(function (commentarios) {
      pintarComentarios(commentarios);
      return getUsuarios(commentarios);
    })
    .then(function (usuarios) {
      pintarUsuarios(usuarios);
      return getFotos(usuarios);
    })
    .then(function (fotos) {
      pintarFotos(fotos);
      return getVideos(fotos);
    })
    .then(function (videos) {
      pintarVideos(videos);
      return getAudios(videos);
    })
    .then(function (audios) {
      pintarAudios(audios);
      return getArchivos(audios);
    })
    .then(function (archivos) {
      pintarArchivos(archivos);
      return getPdfs(archivos);
    })
    .then(function (pdfs) {
      pintarPdfs(pdfs);
      return getMp3s(pdfs);
    })
    .then(function (mp3s) {
      pintarMp3s(mp3s);
      return getMp4s(mp3s);
    })
    .then(function (mp4s) {
      pintarMp4s(mp4s);
      return getJpgs(mp4s);
    })
    .then(function (jpgs) {
      pintarJpgs(jpgs);
      return getPngs(jpgs);
    })
    .then(function (pngs) {
      pintarPngs(pngs);
    });
}
