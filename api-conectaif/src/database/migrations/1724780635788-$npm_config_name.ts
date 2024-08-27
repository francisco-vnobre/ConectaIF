import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class $npmConfigName1724780635788 implements MigrationInterface {
  private colmun = new TableColumn({
    name: "createdAt",
    type: "timestamp",
    isPrimary: false,
    isNullable: false,
    default: "now()",
  });
  private colmun2 = new TableColumn({
    name: "updatedAt",
    type: "timestamp",
    isPrimary: false,
    isNullable: false,
    default: "now()",
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("usuarios", this.colmun);
    await queryRunner.addColumn("usuarios", this.colmun2);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("usuarios", this.colmun);
    await queryRunner.addColumn("usuarios", this.colmun2);
  }
}
