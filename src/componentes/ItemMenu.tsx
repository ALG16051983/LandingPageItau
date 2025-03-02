import Image from "next/image"; // Importar o componente Image

import Arrow from "/assets/Arrow-down.svg"; // Importar a imagem Arrow (ajuste o caminho se necessário)

interface Props {
  name: string;
}

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>{" "}
      {/* Usar a propriedade name */}
      <Image src={Arrow} alt="Arrow dropdown" />
    </button>
  );
}
