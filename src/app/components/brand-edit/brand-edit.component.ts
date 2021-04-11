import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  brands: Brand[] = [];

  brandUpdateForm: FormGroup;
  selectedBrand: Brand;

  constructor(
    private brandService: BrandService,
    private toastrService : ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  delete(brand: Brand) {
    this.brandService.delete(brand).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  updateCreateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: [this.selectedBrand.id, Validators.required],
      name: [this.selectedBrand.name, Validators.required],
    });
  }

  setSelectedBrandToUpdate(brand: Brand) {
    this.selectedBrand = brand;
    this.updateCreateForm();
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.warning(
        'Marka ismi boş olamaz',
        'Güncelleme Başarısız'
      );
    }
  }

}
