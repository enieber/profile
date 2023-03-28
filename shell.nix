let pkgs = import <nixpkgs> {};

in pkgs.mkShell rec {
  name = "data-profile";
  
  buildInputs = with pkgs; [
    ocaml
    dune_2
    python3
    nodejs
    yarn
  ];
}    

