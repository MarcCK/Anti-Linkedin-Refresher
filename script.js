// Blockiert die Visibility Events
document.addEventListener('visibilitychange', function(e) {
    e.stopImmediatePropagation();
}, true);

// Nix Focus
window.addEventListener('focus', function(e) {
    e.stopImmediatePropagation();
}, true);

// Nix Verstecken
Object.defineProperty(document, 'visibilityState', {
    get: function() { return 'visible'; }
});
Object.defineProperty(document, 'hidden', {
    get: function() { return false; }
});

console.log("Lass das! Linkedin!");