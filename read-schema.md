CREATE TABLE IF NOT EXISTS "food" (
    "id" SERIAL,
    "FoodName" VARCHAR(255) NOT NULL,
    "FoodType" VARCHAR(255),
    "FoodPrice" VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY ("id")
);
