-- CreateEnum
CREATE TYPE "EcommerceCode" AS ENUM ('B2B', 'B2C', 'B2G', 'G2B', 'G2C', 'G2G', 'C2C', 'C2G');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('EMPRESA', 'GOBIERNO', 'CLIENTE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Activo', 'Eliminado');

-- CreateTable
CREATE TABLE "ecommerce_model" (
    "id_ecommerce_model" SERIAL NOT NULL,
    "code" "EcommerceCode" NOT NULL,
    "description" TEXT,
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "ecommerce_model_pkey" PRIMARY KEY ("id_ecommerce_model")
);

-- CreateTable
CREATE TABLE "canton_ce" (
    "id_canton" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "nombre" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "province_id" BIGINT NOT NULL,

    CONSTRAINT "canton_ce_pkey" PRIMARY KEY ("id_canton")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "id_cart_item" BIGSERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "product_id" BIGINT NOT NULL,
    "shopping_cart_id" BIGINT NOT NULL,
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("id_cart_item")
);

-- CreateTable
CREATE TABLE "comment_ce" (
    "id_comment" BIGSERIAL NOT NULL,
    "comentario" VARCHAR(255),
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "rating" INTEGER NOT NULL DEFAULT 1,
    "status" "Status" DEFAULT 'Activo',
    "product_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "comment_ce_pkey" PRIMARY KEY ("id_comment")
);

-- CreateTable
CREATE TABLE "inventory_ce" (
    "id_inventory" BIGSERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "producto_id" BIGINT,

    CONSTRAINT "inventory_ce_pkey" PRIMARY KEY ("id_inventory")
);

-- CreateTable
CREATE TABLE "order_ce" (
    "id_order" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "order_date" TIMESTAMP(6),
    "payment_method" VARCHAR(255),
    "paypal_payment_id" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "total" DOUBLE PRECISION NOT NULL,
    "buyer_id" BIGINT NOT NULL,

    CONSTRAINT "order_ce_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "order_detail" (
    "id_order_detail" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "guia" TEXT,
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "quantity" INTEGER,
    "subtotal" DOUBLE PRECISION,
    "unit_price" DOUBLE PRECISION,
    "order_id" BIGINT,
    "product_id" BIGINT,
    "seller_id" BIGINT,
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "order_detail_pkey" PRIMARY KEY ("id_order_detail")
);

-- CreateTable
CREATE TABLE "pais_ce" (
    "id_pais" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "pais_ce_pkey" PRIMARY KEY ("id_pais")
);

-- CreateTable
CREATE TABLE "predefined_product" (
    "id_predefined_product" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "category_id" BIGINT NOT NULL,

    CONSTRAINT "predefined_product_pkey" PRIMARY KEY ("id_predefined_product")
);

-- CreateTable
CREATE TABLE "product" (
    "id_product" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "creation_user" VARCHAR(255),
    "description" VARCHAR(255),
    "image" TEXT,
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "price" DOUBLE PRECISION NOT NULL,
    "status" "Status" DEFAULT 'Activo',
    "stock" INTEGER NOT NULL,
    "predefined_product_id" BIGINT NOT NULL,
    "seller_id" BIGINT NOT NULL,
    "unit_of_measure_id" BIGINT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id_product_category" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "description" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id_product_category")
);

-- CreateTable
CREATE TABLE "province_ce" (
    "id_province" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "province_ce_pkey" PRIMARY KEY ("id_province")
);

-- CreateTable
CREATE TABLE "role_ce" (
    "id_role" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "role_ce_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "shopping_cart" (
    "id_shopping_cart" BIGSERIAL NOT NULL,
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "total" DOUBLE PRECISION NOT NULL,
    "user_id" BIGINT NOT NULL,

    CONSTRAINT "shopping_cart_pkey" PRIMARY KEY ("id_shopping_cart")
);

-- CreateTable
CREATE TABLE "unit_of_measure" (
    "id_unit_of_measure" BIGSERIAL NOT NULL,
    "abreviature" VARCHAR(255),
    "creation_date" TIMESTAMP(6),
    "creation_user" VARCHAR(255),
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "unit_of_measure_pkey" PRIMARY KEY ("id_unit_of_measure")
);

-- CreateTable
CREATE TABLE "user_ce" (
    "id_user" BIGSERIAL NOT NULL,
    "address" VARCHAR(255),
    "creation_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "creation_user" VARCHAR(255),
    "disabled" BOOLEAN DEFAULT false,
    "email" VARCHAR(255),
    "last_name" VARCHAR(255),
    "locked" BOOLEAN DEFAULT false,
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "name" VARCHAR(255),
    "observation" VARCHAR(255),
    "businessDescription" TEXT,
    "password" VARCHAR(255),
    "paypal_email" VARCHAR(255),
    "phone" VARCHAR(255),
    "status" "Status" DEFAULT 'Activo',
    "userType" "UserType" NOT NULL DEFAULT 'CLIENTE',
    "canton_id" BIGINT,
    "pais_id" BIGINT NOT NULL,
    "user_id" BIGINT,
    "isOnline" BOOLEAN DEFAULT false,
    "allowPaypalPayments" BOOLEAN DEFAULT false,
    "allowBankTransfers" BOOLEAN DEFAULT false,
    "bankTransfersInfo" TEXT,

    CONSTRAINT "user_ce_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "chat_users" (
    "emisor_id" BIGSERIAL NOT NULL,
    "receptor_id" BIGSERIAL NOT NULL,
    "status" "Status" DEFAULT 'Activo',

    CONSTRAINT "chat_users_pkey" PRIMARY KEY ("emisor_id","receptor_id")
);

-- CreateTable
CREATE TABLE "message_ce" (
    "id_message" BIGSERIAL NOT NULL,
    "text_message" VARCHAR(255) NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creation_user" BIGINT NOT NULL,
    "modification_date" TIMESTAMP(6),
    "modification_user" VARCHAR(255),
    "observation" VARCHAR(255),
    "shipping_date" TIMESTAMP(6),
    "status" "Status" DEFAULT 'Activo',
    "chat_usersEmisor_id" BIGINT NOT NULL,
    "chat_usersReceptor_id" BIGINT NOT NULL,

    CONSTRAINT "message_ce_pkey" PRIMARY KEY ("id_message")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" BIGSERIAL NOT NULL,
    "role_id" BIGINT,
    "user_id" BIGINT,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_requests" (
    "id_user_request" SERIAL NOT NULL,
    "user_id" BIGINT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "status" "Status" DEFAULT 'Activo',
    "creation_date" TIMESTAMP(6),

    CONSTRAINT "user_requests_pkey" PRIMARY KEY ("id_user_request")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_ce_paypal_payment_id_key" ON "order_ce"("paypal_payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "shopping_cart_user_id_key" ON "shopping_cart"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_ce_email_key" ON "user_ce"("email");

-- AddForeignKey
ALTER TABLE "canton_ce" ADD CONSTRAINT "fkccbjfj868fde05vy8i6kqyy4n" FOREIGN KEY ("province_id") REFERENCES "province_ce"("id_province") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "fke89gjdx91fxnmkkssyoim8xfu" FOREIGN KEY ("shopping_cart_id") REFERENCES "shopping_cart"("id_shopping_cart") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "fkjcyd5wv4igqnw413rgxbfu4nv" FOREIGN KEY ("product_id") REFERENCES "product"("id_product") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comment_ce" ADD CONSTRAINT "fk890uvttwi2ikpr3ingawiv5er" FOREIGN KEY ("product_id") REFERENCES "product"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comment_ce" ADD CONSTRAINT "fkj7u9fw1m5nvki4wje3u4xp8yt" FOREIGN KEY ("user_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory_ce" ADD CONSTRAINT "fkaegxmlmlbxx00uk4yiiw3bon5" FOREIGN KEY ("producto_id") REFERENCES "product"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_ce" ADD CONSTRAINT "fk5615ygh96uhycaxxf7v61docr" FOREIGN KEY ("buyer_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "fkb8bg2bkty0oksa3wiq5mp5qnc" FOREIGN KEY ("product_id") REFERENCES "product"("id_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "fkqtp5mijhv0wh8c02j69xhpy9q" FOREIGN KEY ("seller_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "fktrbelsls34mclih6jqmd58yio" FOREIGN KEY ("order_id") REFERENCES "order_ce"("id_order") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "predefined_product" ADD CONSTRAINT "fkka69txquqjfcwaj8e12o77hod" FOREIGN KEY ("category_id") REFERENCES "product_category"("id_product_category") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "fk6fgxdc9vsscckaq27yi5h31ni" FOREIGN KEY ("unit_of_measure_id") REFERENCES "unit_of_measure"("id_unit_of_measure") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "fk82lof3v9dmjvn85f5q7t6faqy" FOREIGN KEY ("seller_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "fkay92br6je682bx1q56v5w7tge" FOREIGN KEY ("predefined_product_id") REFERENCES "predefined_product"("id_predefined_product") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shopping_cart" ADD CONSTRAINT "fkdf818y2ko5m7nfxqglbhurr71" FOREIGN KEY ("user_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_ce" ADD CONSTRAINT "fk395iojpxiq0lla330rmp7ptt3" FOREIGN KEY ("canton_id") REFERENCES "canton_ce"("id_canton") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_ce" ADD CONSTRAINT "fkcft99y1rb8pwg435besokbpbg" FOREIGN KEY ("pais_id") REFERENCES "pais_ce"("id_pais") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat_users" ADD CONSTRAINT "chat_users_emisor_id_fkey" FOREIGN KEY ("emisor_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chat_users" ADD CONSTRAINT "chat_users_receptor_id_fkey" FOREIGN KEY ("receptor_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message_ce" ADD CONSTRAINT "message_ce_chat_usersEmisor_id_chat_usersReceptor_id_fkey" FOREIGN KEY ("chat_usersEmisor_id", "chat_usersReceptor_id") REFERENCES "chat_users"("emisor_id", "receptor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "fk3fl1jh1bo1pwjeouerc2ajvi5" FOREIGN KEY ("user_id") REFERENCES "user_ce"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "fk94k0hj897tea8a6493lgux5w" FOREIGN KEY ("role_id") REFERENCES "role_ce"("id_role") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_requests" ADD CONSTRAINT "user_requests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_ce"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
