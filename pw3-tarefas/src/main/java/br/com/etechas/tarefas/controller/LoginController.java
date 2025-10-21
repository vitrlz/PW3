package br.com.etechas.tarefas.controller;

import br.com.etechas.tarefas.dto.LoginRequestDTO;
import br.com.etechas.tarefas.dto.LoginResponseDTO;
import br.com.etechas.tarefas.security.JWTHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private JWTHolder jwtHolder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> autenticar(@RequestBody LoginRequestDTO loginRequest){
        var autenticar = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.usuario(),loginRequest.senha()));
        final String token = jwtHolder.generateToken((UserDetails) autenticar.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

}
