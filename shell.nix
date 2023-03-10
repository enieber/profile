let pkgs = import <nixpkgs> {};

in pkgs.mkShell rec {
  name = "data-profile";
  
  buildInputs = with pkgs; [
    nodejs yarn
  ];
}    

