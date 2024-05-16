

<template>
  <div class="fill-height fondo-cover">
  <v-container class="fill-height ">
    <v-responsive
      class="align-center fill-height mx-auto" max-width="auto">

            <div id="splash-screen" v-if="showSplash">
              <h1>Welcome to Water Jug Challenge Expl<img src="./waterD.png" alt="Logo" id="logo">rer </h1>
              <h3>2024, <a href="https://github.com/DrSlamp?tab=overview&from=2024-04-01&to=2024-04-30" style="text-decoration: none;"> PolSlam </a> </h3>
             </div>


      <v-row>
        <v-col cols="12">
          <h1 class="text-center">Water jug challenge Explorer View</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
           :class="{'bg-green1': bucketX > 0}"
            label="Bucket 1 (X)"
             type="number"
                v-model.number="bucketX"
                  :rules="[rules.positive]" 
                  ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          :class="{'bg-green1': bucketY > 0}"
            label="Bucket 2 (Y)"
            type="number"
            v-model.number="bucketY"
            :rules="[rules.positive]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          :class="{'bg-green1': amountWanted > 0}"
            label="Amount wanted"
            type="number"
            v-model.number="amountWanted"
            :rules="[rules.positive]"
          ></v-text-field>
        </v-col>
            <v-col cols="12" sm="6" md="3">
                  <v-btn class="glassmorphic-button" @click="resetValues">Reset Values</v-btn>
                  <v-btn class="glassmorphic-button" @click="generatePDF">Save as PDF</v-btn>

            </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div id="capture" class="fill-height fondo-cover">
          <v-table  class="glassmorphic-button">
            <thead>
              <tr>
                  <th>Bucket X</th>
                  <th>WaterDrops in X</th>
                  <th>Bucket Y</th>
                  <th>WaterDrops in Y</th>
                  <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="steps.length === 0">
                <td colspan="5" class="font-weight-bold text-center">
                  No solution
                </td>
              </tr>
              <tr v-for="(step, id) in steps" :key="id">
                <td>{{ step.x }}</td>
                <td><water-image :amount="step.x" /></td>
                <td>{{ step.y }}</td>
                <td><water-image :amount="step.y" /></td>
                <td>{{ step.explanation }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  </div>
</template>
<script setup>
import { ref, computed, onMounted} from 'vue';
import { calculateSteps } from '@/helpers/calculateSteps.js';
import WaterImage from '@/components/WaterImage.vue';
import { useToast } from 'vue-toastification'; //added flash notifications
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

const toast = useToast();

// Show welcome message on page load
onMounted(() => {
  console.log('Component mounted');
  toast.success('Welcome to BFS water Jug', {
    id: Date.now() // Use the current timestamp as a unique ID
  });
  setTimeout(() => {
    showSplash.value = false;
  }, 3000); // Hide splash screen after 3 seconds
});

const bucketX = ref(null);
const bucketY = ref(null);
const amountWanted = ref(null);
const showSplash = ref(true); // Added showS

const rules = ref({
  positive: value => value > 0 || 'Value should be greater than 0'
})

const steps = computed(() => {
  return calculateSteps(bucketX.value, bucketY.value, amountWanted.value);
})

//FN buttons

const resetValues = () => {
  bucketX.value = null;
  bucketY.value = null;
  amountWanted.value = null;
  toast.success('Done!');
}

const generatePDF = () => {
  let input = document.querySelector("#capture");
  
  let rect = input.getBoundingClientRect();
  let width = rect.width;
  let height = rect.height;

  html2canvas(input, { scale: window.devicePixelRatio }).then(canvas => {
    var imgData = canvas.toDataURL('image/png');
    
    width *= 0.2645833333;
    height *= 0.2645833333;

    var doc = new jsPDF({
      orientation: width > height ? 'l' : 'p',
      unit: 'mm',
      format: [width, height]
    });

    doc.addImage(imgData, 'PNG', 0, 0, width, height);
    toast.success('PDF Downloaded!');
    doc.save('Solve.pdf');
  });
}
</script>
/* local css folder*/
<style scoped src="src/css/CSS.css"></style>
