import jwt from "jsonwebtoken";

// export const authenticate = (req, res, next) => {

//   const token = req.cookies.token;

//   if (!token && req.path !== "/") {
//     return next();
//   }
//   if (!token) {
//     return res.redirect("/");
//   }
//   try {
//     const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     req.user = user;

//     if (req.path === '/auth/login' || req.path === '/register') {
//       return res.redirect('/auth');
//     }
//     next();
//   } catch (error) {
//     res.clearCookie("token");
//     return res.redirect("/");
//   }
// };

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  // Exclure certaines routes de redirection
  const publicPaths = ['/', '/login', '/register', '/auth'];

  if (!token) {
    if (publicPaths.includes(req.path)) {
      return next(); // Laisser passer pour ces routes publiques
    }
    return res.redirect("/"); // Rediriger seulement si ce n'est pas une route publique
  }

  try {
    // Vérification du token
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;

    // Si utilisateur authentifié, éviter accès à certaines routes
    if (['/', '/'].includes(req.path)) {
      return res.redirect('/auth'); // Rediriger l'utilisateur authentifié
    }

    next(); // Continuer pour les autres routes
  } catch (error) {
    // Gestion des erreurs JWT
    res.clearCookie("token");
    return res.redirect("/"); // Redirection vers la page principale
  }
};
