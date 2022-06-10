-- CreateEnum
CREATE TYPE "TopicType" AS ENUM ('MATEMATICA', 'CIENCIAS', 'PORTUGUES', 'HISTORIA', 'GEOGRAFIA', 'ARTES');

-- CreateEnum
CREATE TYPE "SubTopicsType" AS ENUM ('NUMEROS_DECIMAIS', 'SOMA', 'SUBTRACAO', 'MULTIPLICACAO', 'DIVISAO', 'PORCENTAGEM', 'FRACOES', 'OPERACOES_COM_FRACOES', 'ALGEBRA', 'RAZOES', 'PROPORCOES', 'GEOMETRIA', 'FORMAS', 'AREAS', 'ANGULOS', 'TRIANGULOS', 'CONGRUENCIA', 'PROPORCIONALIDADE', 'LOCALIZACAO', 'GRANDEZAS_E_MEDIDAS', 'CONVERSAO', 'MASSA_VOLUME', 'COMPRIMENTO', 'TEMPO', 'PERIMETRO', 'PROBABILIDADE', 'ESTATISTICA', 'GRAFICOS', 'EVENTOS_ALEATORIOS', 'PESQUISAS');

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "options" TEXT[],
    "image" TEXT,
    "topic" "TopicType" NOT NULL,
    "subTopics" "SubTopicsType"[],
    "level" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
