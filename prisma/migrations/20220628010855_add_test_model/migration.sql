-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "userKey" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Test_userKey_id_idx" ON "Test"("userKey", "id");

-- CreateIndex
CREATE INDEX "Question_level_subTopics_idx" ON "Question"("level", "subTopics");
