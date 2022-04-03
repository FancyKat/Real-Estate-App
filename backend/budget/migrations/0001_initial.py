# Generated by Django 4.0.3 on 2022-03-26 14:44

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models

import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Transaction",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        db_index=True,
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        db_index=True,
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                ("amount", models.IntegerField()),
                ("name", models.CharField(max_length=100)),
                (
                    "id_user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Expense",
            fields=[
                (
                    "transaction_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="budget.transaction",
                    ),
                ),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("FOOD", "Food"),
                            ("GOODS", "Goods"),
                            ("BILLS", "Bills"),
                            ("OTHER", "Other"),
                        ],
                        default="OTHER",
                        max_length=5,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
            bases=("budget.transaction",),
        ),
        migrations.CreateModel(
            name="Income",
            fields=[
                (
                    "transaction_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="budget.transaction",
                    ),
                ),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("JOB", "Job"),
                            ("GIFT", "Gift"),
                            ("THEFT", "Theft"),
                            ("OTHER", "Other"),
                        ],
                        default="OTHER",
                        max_length=5,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
            bases=("budget.transaction",),
        ),
        migrations.CreateModel(
            name="Budget",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        db_index=True,
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        db_index=True,
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                ("name", models.CharField(max_length=128)),
                ("total_budget", models.IntegerField()),
                (
                    "users",
                    models.ManyToManyField(
                        blank=True, related_name="budgets", to=settings.AUTH_USER_MODEL
                    ),
                ),
                ("expenses", models.ManyToManyField(blank=True, to="budget.expense")),
                ("incomes", models.ManyToManyField(blank=True, to="budget.income")),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
