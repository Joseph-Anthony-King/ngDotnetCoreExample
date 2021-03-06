﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using ngDotnetCoreExample.Models.DataModel;

namespace ngDotnetCoreExample.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20181210195512_InitiateDatabase")]
    partial class InitiateDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("ngDotnetCoreExample.Domain.CalendarItem", b =>
                {
                    b.Property<int>("CalendarItemId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CalendarItemDescription");

                    b.Property<string>("CalendarItemEndDate")
                        .IsRequired();

                    b.Property<string>("CalendarItemStartDate")
                        .IsRequired();

                    b.Property<string>("CalendarItemTitle")
                        .IsRequired();

                    b.HasKey("CalendarItemId");

                    b.ToTable("CalendarItems");
                });
#pragma warning restore 612, 618
        }
    }
}
