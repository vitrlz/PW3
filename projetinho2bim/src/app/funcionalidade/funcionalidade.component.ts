import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Post {
  id: number; 
  titulo: string;
  descricao: string;
  arquivoURL: string;
  tipoArquivo: string; 
}

@Component({
  selector: 'app-funcionalidade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionalidade.component.html',
  styleUrl: './funcionalidade.component.css',
  
})
export class FuncionalidadeComponent {
  
 posts: Post[] = [];
  novoPostTitulo = '';
  novoPostDescricao = '';
  arquivoSelecionado: File | null = null;

  // 2. Variáveis para controlar o estado da edição
  postEmEdicaoId: number | null = null; // <-- NOVO: Guarda o ID do post sendo editado
  private proximoId = 1; // <-- NOVO: Um contador simples para gerar IDs únicos

  onArquivoSelecionado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.arquivoSelecionado = input.files[0];
    }
  }

  // 3. A função de criar foi renomeada para 'salvarPost' e agora lida com criar e editar
  salvarPost(): void {
    if (!this.novoPostTitulo || !this.novoPostDescricao) {
      alert('Por favor, preencha o título e a descrição.');
      return;
    }

    // Se estamos em modo de EDIÇÃO
    if (this.postEmEdicaoId !== null) {
      const postExistente = this.posts.find(p => p.id === this.postEmEdicaoId);
      if (postExistente) {
        postExistente.titulo = this.novoPostTitulo;
        postExistente.descricao = this.novoPostDescricao;

        // Atualiza o arquivo de mídia apenas se um novo foi selecionado
        if (this.arquivoSelecionado) {
          postExistente.arquivoURL = URL.createObjectURL(this.arquivoSelecionado);
          postExistente.tipoArquivo = this.arquivoSelecionado.type;
        }
      }
    }
    // Se estamos em modo de CRIAÇÃO
    else {
      if (!this.arquivoSelecionado) {
        alert('Por favor, selecione um arquivo de mídia.');
        return;
      }
      const novoPost: Post = {
        id: this.proximoId++, // Atribui um ID único e incrementa o contador
        titulo: this.novoPostTitulo,
        descricao: this.novoPostDescricao,
        arquivoURL: URL.createObjectURL(this.arquivoSelecionado),
        tipoArquivo: this.arquivoSelecionado.type
      };
      this.posts.unshift(novoPost);
    }

    // Limpa o formulário e o estado de edição
    this.cancelarEdicao();
  }

  // 4. NOVA função para iniciar a edição de um post
  iniciarEdicao(post: Post): void {
    this.postEmEdicaoId = post.id;
    this.novoPostTitulo = post.titulo;
    this.novoPostDescricao = post.descricao;
    // Não preenchemos o arquivo, o usuário precisa selecionar um novo se quiser mudar
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola a página para o topo
  }

  // 5. NOVA função para cancelar a edição
  cancelarEdicao(): void {
    this.postEmEdicaoId = null;
    this.novoPostTitulo = '';
    this.novoPostDescricao = '';
    this.arquivoSelecionado = null;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  // 6. NOVA função para excluir um post
  excluirPost(idParaExcluir: number): void {
    // Usamos confirm() para dar uma chance ao usuário de cancelar
    const confirmacao = confirm('Tem certeza de que deseja excluir este post?');
    if (confirmacao) {
      this.posts = this.posts.filter(post => post.id !== idParaExcluir);
    }
  }
}


